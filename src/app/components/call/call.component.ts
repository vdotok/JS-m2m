import { ChangeDetectorRef, Component, ElementRef, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { MatLegacyDialog as MatDialog } from '@angular/material/legacy-dialog';
import { Router } from '@angular/router';
import { FindArrayObject, isMobile } from 'src/app/shared/helpers/helpersFunctions';
import { BaseService } from 'src/app/shared/services/base.service';
import { PubsubService } from 'src/app/shared/services/pubsub.service';
import { StorageService } from 'src/app/shared/services/storage.service';
import { timer, Subscription } from "rxjs";
import { ToastrService } from 'ngx-toastr';
import { UntypedFormBuilder, UntypedFormControl, UntypedFormGroup, Validators } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import FormsHandler from 'src/app/shared/FormsHandler/FormsHandler';

@Component({
  selector: 'call',
  templateUrl: './call.component.html',
  styleUrls: ['./call.component.scss']
})
export class CallComponent implements OnInit {
  @ViewChild('noCall') noCall: TemplateRef<any>;
  @ViewChild('groupIncommingAudioCall') groupIncommingAudioCall: TemplateRef<any>;
  @ViewChild('groupOutgoingAudioCall') groupOutgoingAudioCall: TemplateRef<any>;
  @ViewChild('groupOngoingAudioCall') groupOngoingAudioCall: TemplateRef<any>;
  @ViewChild('groupIncommingVideoCall') groupIncommingVideoCall: TemplateRef<any>;
  @ViewChild('groupVideoCall') groupVideoCall: TemplateRef<any>;
  //@ViewChild('searchInput') searchInput: ElementRef;
  currentUserName = StorageService.getAuthUsername();
  currentUserData = StorageService.getUserData();
  threadType = 'THREAD';
  screen = 'LISTING';
  dialogRef: any;
  loading = true;
  groupForm: UntypedFormGroup;
  AllGroups = [];
  AllUsers = [];
  countDownTime: Subscription;
  callTime = 0;
  groupOutgoingVideoCall = false;
  sdkconnected = false;
  activeChat: any = {
    chatHistory: []
  };
  calling = {
    participant: [],
    call_type: 'video',
    templateName: 'noCall',
    callerName: ''
  }
  settings = {
    isOnInProgressCamara: true,
    isOnInProgressMicrophone: true
  }
  session_UUID: any;
  get selectedTemplate() {
    const templateList = {
      noCall: this.noCall,
      groupIncommingAudioCall: this.groupIncommingAudioCall,
      groupOutgoingAudioCall: this.groupOutgoingAudioCall,
      groupOngoingAudioCall: this.groupOngoingAudioCall,
      groupIncommingVideoCall: this.groupIncommingVideoCall,
      groupVideoCall: this.groupVideoCall
    }
    return templateList[this.calling['templateName']];
  }

  constructor(
    private _fb: UntypedFormBuilder,
    public pubsubService: PubsubService,
    private svc: BaseService,
    private router: Router,
    public dialog: MatDialog,
    private changeDetector: ChangeDetectorRef,
    private toastr: ToastrService,
    private modalService: NgbModal,
  ) {
    this.groupForm = this._fb.group({
      'group_id': new UntypedFormControl('', [Validators.required]),
      'group_title': new UntypedFormControl('', [Validators.required, Validators.maxLength(100)]),
    }, { updateOn: 'change' });
    this.pubsubService.initConfigure();
  }

  ngOnInit() {
    this.svc.post('AllUsers').subscribe(v => {
      if (v && v.status == 200) {
        this.AllUsers = v.users;
      }
    });

    this.pubsubService.Client.on("register", response => {
      console.error("register response", response);
    });

    this.pubsubService.Client.on("connected", response => {
      this.sdkconnected = true;
      console.error("connected response", response);
      if (!this.AllGroups.length) {
        this.getAllGroups();
      }
    });

    this.pubsubService.Client.on("groupCall", response => {
      console.log("**** Call response: \n\n", response, "\n");
      switch (response.type) {
        case "CALL_RECEIVED":
          if (this.inCall()) {
            this.toastr.warning("Opps!", "InComming Call")
            return;
          }
          this.screen = 'MAIN'
          this.calling.callerName = this.findUserName(response.from);
          this.calling.templateName = response.callType == 'video' ? 'groupIncommingVideoCall' : 'groupIncommingAudioCall'; //call_type
          this.calling.call_type = response.callType; //call_type
          this.session_UUID = response.uuid; //added by me

          this.changeDetector.detectChanges();
          break;
        case "NEW_PARTICIPANT":
          this.calling.templateName = this.calling.call_type == 'video' ? 'groupVideoCall' : 'groupOngoingAudioCall';
          this.groupOutgoingVideoCall = false;
          this.addParticipant(response);
          // this.session_UUID = response.uuid; //added by me
          break;
        case "PARTICIPANT_LEFT":
          console.error("removeParticipant", response);
          this.removeParticipant(response);
          break;
        case "PARTICIPANT_STATUS":
          const displaystyle = response.video_status ? 'block' : 'none';
          if (document.getElementById(response.participant)) document.getElementById(response.participant).style.display = displaystyle;
          break;
        case "CALL_ENDED":
          this.session_UUID = "";
          break;        
      }
    });

  }

  ngAfterViewInit(): void {
    this.pubsubService.Client.on("authentication_error", (res: any) => {
      this.toastr.error("SDK Authentication Error", "Opps");
    });
  }

  deleteGroup(group) {
    this.loading = true;
    const playload = {
      group_id: group.id
    }
    this.svc.post('DeleteGroup', playload).subscribe(v => {
      if (v && v.status == 200) {
        this.loading = false;
        this.getAllGroups();
        this.toastr.success('The group has been deleted!', 'Success!');
      }
    });
  }

  openModal(content, group) {
    if (group.auto_created) {
      alert("You Can not change personal group name");
      return;
    }
    group['group_id'] = group.id
    this.groupForm.reset(group);
    this.dialogRef = this.modalService.open(content, {
      centered: true,
      backdrop: 'static',
      windowClass: 'dark-modal'
    });
  }

  editGroup() {
    FormsHandler.validateForm(this.groupForm);
    if (this.groupForm.invalid || this.loading) return;
    const playload = this.groupForm.value;
    this.loading = true;
    this.svc.post('RenameGroup', playload).subscribe(v => {
      if (v && v.status == 200) {
        this.getAllGroups();
        this.dialogRef.close();
        this.loading = false;
        this.toastr.success('The group has been updated!', 'Success!');
      }
    });
  }

  getAllGroups() {
    this.loading = true;
    this.svc.get('AllGroups').subscribe(v => {
      this.loading = false;
      if (v && v.status == 200) {
        this.AllGroups = v.groups.map(chat => {
          chat['chatTitle'] = chat.auto_created ? chat.participants[0]['full_name'] : chat.group_title;
          chat['key'] = chat.channel_key;
          chat['channel'] = chat.channel_name;
          chat['ref_id'] = chat['participants'] && chat['participants'][0].ref_id;
          return chat;
        });
      }
      this.changeDetector.detectChanges();
    });
  }

  findUserName(ref_id) {
    const user = FindArrayObject(this.AllUsers, 'ref_id', ref_id);
    return user ? user.full_name : 'Group A';
  }

  changeSidebar($event) {
    this.threadType = $event;
    if (this.threadType == 'THREAD') {
      this.getAllGroups();
    }
  }

  newGroup() {
    this.threadType = 'GROUP';
    this.changeDetector.detectChanges();
  }

  logout() {
    StorageService.clearLocalStorge();
    this.router.navigate(['login']);
  }

  rejectedCall() {
    this.calling.templateName = 'noCall';
    this.changeDetector.detectChanges();
    this.pubsubService.Client.leaveGroupCall();
  }

  resetCall() {
    this.settings = {
      isOnInProgressCamara: true,
      isOnInProgressMicrophone: true
    }
    this.calling = {
      participant: [],
      call_type: 'video',
      templateName: 'noCall',
      callerName: ''
    }
    this.callTime = 0;
    this.screen = 'LISTING';
    this.groupOutgoingVideoCall = false;
    this.hideCallContainer2 = false;
    this.hideCallContainer3 = true;
    if (this.countDownTime) this.countDownTime.unsubscribe();
    this.changeDetector.detectChanges();
  }

  stopCall() {
    this.calling.templateName = 'noCall';
    this.pubsubService.leaveGroupCall();
    this.resetCall();
    this.changeDetector.detectChanges();
  }

  inCall(): boolean {
    return this.calling.templateName != 'noCall'
  }

  acceptcall() {
    if (this.inProgressCall()) return;
    console.log("*** acceptcall:  \n\n", this.calling);
    
    this.calling.templateName = this.calling.call_type == 'video' ? 'groupVideoCall' : 'groupOngoingAudioCall';
    this.changeDetector.detectChanges();
    const params = {
      localVideo: document.getElementById("localVideo"),
      callType: this.calling.call_type  //call_type
    }
    this.changeDetector.detectChanges();
    this.groupOutgoingVideoCall = false;
    this.pubsubService.joinGroupCall(params);
    this.changeDetector.detectChanges();
  }

  startWatch() {
    if (!this.callTime) {
      this.countDownTime = timer(0, 1000).subscribe(() => ++this.callTime);
    }
  }

  startVideoCall(group) {
    if (this.inCall()) return;
    this.screen = 'MAIN';
    this.groupOutgoingVideoCall = true;
    this.calling.templateName = 'groupVideoCall';
    this.calling['callerName'] = group['chatTitle'];
    this.changeDetector.detectChanges();
    const p = group['participants'].filter(g => g.ref_id != this.currentUserName).map(g => g.ref_id);
    const params = {
      callType: "video", //call_type
      localVideo: document.getElementById("localVideo"),
      to: [...p],
    }
    this.pubsubService.groupCall(params).then((res) => {
      console.log("*** uuid\n\n: ", res); 
      this.session_UUID = res;

    })
  }

  startAudioCall(group) {
    console.log("*** startAudioCall", group);
    
    if (this.inCall()) return;
    this.calling.call_type = 'audio';
    this.screen = 'MAIN';
    this.calling.templateName = 'groupOutgoingAudioCall';
    this.calling['callerName'] = group['chatTitle'];
    const participants = group['participants'].filter(g => g.ref_id != this.currentUserName).map(g => g.ref_id);
    const params = {
      callType: "audio", //call_type
      localVideo: document.getElementById("localAudio"),
      to: [...participants],
    }
    this.pubsubService.groupCall(params).then((res) => {
      console.log("*** uuid\n\n: ", res); 
      this.session_UUID = res;
    })
  }

  changeSettings(filed) {
    console.log("changeSettings mic uuid: \n", this.session_UUID);
    
    this.settings[filed] = !this.settings[filed];
    switch (filed) {
      case 'isOnInProgressCamara':
        this.settings[filed] ? this.pubsubService.setCameraOn() : this.pubsubService.setCameraOff();
        const displaystyle = this.settings[filed] ? 'block' : 'none';
        const displayNamestyle = this.settings[filed] ? 'none' : 'block';
        document.getElementById('localVideo').style.display = displaystyle;
        document.getElementById('localNameHolder').style.display = displayNamestyle;
        break;
      case 'isOnInProgressMicrophone':

        this.settings[filed] ? this.pubsubService.setMicUnmute(this.session_UUID) : this.pubsubService.setMicMute(this.session_UUID);
        const enabled = this.settings[filed];
        const audiotrack: any = (<HTMLInputElement>document.getElementById("localAudio"));

        console.log("*** mute called or not: \n", this.session_UUID, filed, this.settings[filed], audiotrack);

        if (audiotrack && audiotrack.audioTracks) {
          audiotrack.audioTracks[0].enabled = enabled;
        }
        break;
    }
  }

  isShowVideo() {
    return this.calling.templateName != 'groupVideoCall' || this.calling.call_type != 'video';
  }

  addParticipant(response) {
    const user = this.AllUsers.find(user => user.ref_id == response.participant);
    this.calling.participant.push(user);
    this.changeDetector.detectChanges();
    setTimeout(() => {
      this.changeDetector.detectChanges();
      this.pubsubService.setParticipantVideo(response.participant, document.getElementById(response.participant));
      const user = this.findUserName(response.participant);
      const textmsg = user + ' ' + 'has joined';
      this.toastr.success(textmsg);
    });
    this.startWatch();
    this.changeDetector.detectChanges();
  }

  removeParticipant(response) {
    const index = this.calling.participant.findIndex(user => user.ref_id == response.participant);
    const user = this.findUserName(response.participant);
    if (user && user != 'Group A') {
      const textmsg = user + ' ' + 'has left';
      this.toastr.success(textmsg);
    }
    this.calling.participant.splice(index, 1);
    if (!this.calling.participant.length) {
      this.resetCall();
    }
    this.changeDetector.detectChanges();
  }

  inProgressCall() {
    return this.calling.templateName == 'groupVideoCall' || this.calling.templateName == 'groupOngoingAudioCall';
  }

  isHideThread() {
    return isMobile() ? this.screen != 'LISTING' : false;
  }

  isHideChatScreen() {
    return isMobile() ? this.screen != 'MAIN' : false;
  }

  isHideRemoteVideo(): boolean {
    const ishide = !(this.calling.templateName == 'groupVideoCall' && this.calling.call_type == 'video');
    return ishide;
  }


  hideCallContainer2 = false;
  hideCallContainer3 = true;

  previousScreen() {
    this.hideCallContainer2 = false;
    this.hideCallContainer3 = true;
  }

  nextScreen() {
    this.hideCallContainer2 = true;
    this.hideCallContainer3 = false;
  }

  isHidePaginationBtn(): boolean {
    return this.calling.templateName != 'groupVideoCall' || this.calling.participant.length < 4;
  }

  isHideAudioPagination = false;
  isHideAudioPaginationBtn(): boolean {
    return !(this.calling.templateName == 'groupOngoingAudioCall' && this.calling.participant.length > 4);
  }

}
