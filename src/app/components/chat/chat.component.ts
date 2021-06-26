import { ChangeDetectorRef, Component, ElementRef, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { FindArrayObject, isMobile } from 'src/app/shared/helpers/helpersFunctions';
import { BaseService } from 'src/app/shared/services/base.service';
import { PubsubService } from 'src/app/shared/services/pubsub.service';
import { StorageService } from 'src/app/shared/services/storage.service';
import { timer, Subscription } from "rxjs";
import { ToastrService } from 'ngx-toastr';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import FormsHandler from 'src/app/shared/FormsHandler/FormsHandler';

@Component({
  selector: 'chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements OnInit {
  loading = true;
  groupForm: FormGroup;
  AllGroups = [];
  AllUsers = [];
  activeChat: any = {
    chatHistory: []
  };
  currentUserName = StorageService.getAuthUsername();
  currentUserData = StorageService.getUserData();
  threadType = 'THREAD';
  screen = 'CHAT';
  isActiveThread = false;
  dialogRef;
  calling = {
    participant: [],
    call_type: 'video',
    templateName: 'noCall',
    callerName: ''
  }
  countDownTime: Subscription;
  callTime = 0;
  settings = {
    isOnCamara: true,
    isOnMicrophone: true,
    isOnInProgressCamara: true,
    isOnInProgressMicrophone: true
  }

  @ViewChild('noCall') noCall: TemplateRef<any>;
  @ViewChild('groupIncommingAudioCall') groupIncommingAudioCall: TemplateRef<any>;
  @ViewChild('groupOutgoingAudioCall') groupOutgoingAudioCall: TemplateRef<any>;
  @ViewChild('groupOngoingAudioCall') groupOngoingAudioCall: TemplateRef<any>;
  @ViewChild('groupIncommingVideoCall') groupIncommingVideoCall: TemplateRef<any>;
  @ViewChild('groupOutgoingVideoCall') groupOutgoingVideoCall: TemplateRef<any>;
  @ViewChild('groupOngoingVideoCall') groupOngoingVideoCall: TemplateRef<any>;
  @ViewChild('searchInput') searchInput: ElementRef;

  get selectedTemplate() {
    const templateList = {
      noCall: this.noCall,
      groupIncommingAudioCall: this.groupIncommingAudioCall,
      groupOutgoingAudioCall: this.groupOutgoingAudioCall,
      groupOngoingAudioCall: this.groupOngoingAudioCall,
      groupIncommingVideoCall: this.groupIncommingVideoCall,
      groupOutgoingVideoCall: this.groupOutgoingVideoCall,
      groupOngoingVideoCall: this.groupOngoingVideoCall
    }
    return templateList[this.calling['templateName']];
  }

  constructor(
    private _fb: FormBuilder,
    public pubsubService: PubsubService,
    private svc: BaseService,
    private router: Router,
    public dialog: MatDialog,
    private changeDetector: ChangeDetectorRef,
    private toastr: ToastrService,
    private modalService: NgbModal,
  ) {
    this.groupForm = this._fb.group({
      'group_id': new FormControl('', [Validators.required]),
      'group_title': new FormControl('', [Validators.required, Validators.maxLength(100)]),
    }, { updateOn: 'change' });
    this.pubsubService.initConfigure();
  }

  ngOnInit() {
    this.svc.post('AllUsers').subscribe(v => {
      if (v && v.status == 200) {
        this.AllUsers = v.users;
      }
    });
    this.pubsubService.Client.on("connected", response => {
      console.error("connected response", response);
      if (!this.AllGroups.length) {
        this.getAllGroups();
      }
    });

    this.pubsubService.Client.on("groupCall", response => {
      console.error("groupCall response", response);
      switch (response.type) {
        case "CALL_RECEIVED":
          this.calling['callerName'] = this.findUserName(response.from);
          this.calling.templateName = response.call_type == 'video' ? 'groupIncommingVideoCall' : 'groupIncommingAudioCall';
          this.calling.call_type = response.call_type;
          this.changeDetector.detectChanges();
          this.screen = 'MSG';
          break;
        case "NEW_PARTICIPANT":
          this.calling.templateName = this.calling.call_type == 'video' ? 'groupOngoingVideoCall' : 'groupOngoingAudioCall';
          this.addParticipant(response);
          // this.startWatch();
          break;
        case "PARTICIPANT_LEFT":
          this.removeParticipant(response);
          break;
        case "PARTICIPANT_STATUS":
          const displaystyle = response.video_status ? 'block' : 'none';
          document.getElementById(response.participant).style.display = displaystyle;
          break;
      }
    });
    this.pubsubService.Client.on("register", response => {
      console.error("register response", response);
    });
  }

  ngAfterViewInit(): void {
    this.pubsubService.Client.on("authentication_error", (res: any) => {
      this.toastr.error("SDK Authentication Error", "Opps");
    });
    this.pubsubService.Client.on("disconnect", (response) => {
      console.error("disconnect", response);
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
    console.error("this.groupForm.", this.groupForm.invalid);
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
          chat['chatTitle'] = chat.group_title;
          chat['key'] = chat.channel_key;
          chat['channel'] = chat.channel_name;
          chat['ref_id'] = chat['participants'] && chat['participants'][0].ref_id;
          return chat;
        });
      }
      this.changeDetector.detectChanges();
    });
  }


  findChatThread(ref_id) {
    return FindArrayObject(this.AllGroups, 'ref_id', ref_id);
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
    this.pubsubService.Disconnect();
    StorageService.clearLocalStorge();
    this.router.navigate(['login']);
  }

  rejectedCall() {
    this.calling.templateName = 'noCall';
    this.changeDetector.detectChanges();
    this.pubsubService.Client.endCall();
  }

  resetCall() {
    this.settings = {
      isOnCamara: false,
      isOnMicrophone: false,
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
    if (this.countDownTime) this.countDownTime.unsubscribe();
    this.changeDetector.detectChanges();
    this.screen = 'CHAT';
  }

  stopCall() {
    this.calling.templateName = 'noCall';
    this.pubsubService.endCall();
    this.resetCall();
    this.changeDetector.detectChanges();
    console.error("stopCall");
  }

  inCall() {
    return this.calling.templateName != 'noCall'
  }


  acceptcall() {
    if (this.inProgressCall()) return;
    this.calling.templateName = this.calling.call_type == 'video' ? 'groupOngoingVideoCall' : 'groupOngoingAudioCall';
    this.changeDetector.detectChanges();
    const params = {
      localVideo: document.getElementById("localVideo"),
      call_type: this.calling.call_type
    }
    this.changeDetector.detectChanges();
    this.pubsubService.joinGroupCall(params);
    // this.startWatch();
    this.changeDetector.detectChanges();
  }

  startWatch() {
    if (!this.callTime) {
      this.countDownTime = timer(0, 1000).subscribe(() => ++this.callTime);
    }
  }

  startVideoCall(group) {
    if (this.inCall()) return;
    this.screen = 'MSG';
    this.calling.templateName = 'groupOutgoingVideoCall';
    this.calling['callerName'] = group['chatTitle'];
    this.changeDetector.detectChanges();
    const p = group['participants'].filter(g => g.ref_id != this.currentUserName).map(g => g.ref_id);
    const params = {
      call_type: "video",
      localVideo: document.getElementById("localVideo"),
      to: [...p],
    }
    console.error("startVideoCall", params);
    this.pubsubService.groupCall(params);
  }

  startAudioCall(group) {
    if (this.inCall()) return;
    this.calling.call_type = 'audio';
    this.screen = 'MSG';
    this.calling.templateName = 'groupOutgoingAudioCall';
    this.calling['callerName'] = group['chatTitle'];
    const participants = group['participants'].filter(g => g.ref_id != this.currentUserName).map(g => g.ref_id);
    const params = {
      call_type: "audio",
      localVideo: document.getElementById("localAudio"),
      to: [...participants],
    }
    console.log("startVideoCall", params);
    this.pubsubService.groupCall(params);
  }

  changeSettings(filed) {
    this.settings[filed] = !this.settings[filed];
    console.error("this.settings[filed]", this.settings[filed]);
    switch (filed) {
      case 'isOnInProgressCamara':
        this.settings[filed] ? this.pubsubService.setCameraOn() : this.pubsubService.setCameraOff();
        const displaystyle = this.settings[filed] ? 'block' : 'none';
        const displayNamestyle = this.settings[filed] ? 'none' : 'block';
        document.getElementById('localVideo').style.display = displaystyle;
        document.getElementById('localNameHolder').style.display = displayNamestyle;
        break;
      case 'isOnInProgressMicrophone':
        this.settings[filed] ? this.pubsubService.setMicUnmute() : this.pubsubService.setMicMute();
        break;
    }
  }

  isShowVideo() {
    return this.calling.templateName != 'VideoCallInProgress' || this.calling.call_type != 'video';
  }

  addParticipant(response) {
    const user = this.AllUsers.find(user => user.ref_id == response.participant);
    this.calling.participant.push(user);
    this.changeDetector.detectChanges();
    setTimeout(() => {
      this.changeDetector.detectChanges();
      this.pubsubService.setParticipantVideo(response.participant, document.getElementById(response.participant));
    });
    this.changeDetector.detectChanges();
  }

  removeParticipant(response) {
    const index = this.calling.participant.findIndex(user => user.ref_id == response.participant);
    this.calling.participant.splice(index, 1);
    if (!this.calling.participant.length) {
      this.resetCall();
    }
    this.changeDetector.detectChanges();
  }

  inProgressCall() {
    return this.calling.templateName == 'groupOngoingVideoCall' || this.calling.templateName == 'groupOngoingAudioCall';
  }

  isshownewtemp() {
    return this.calling.templateName == 'groupOutgoingVideoCall' || this.calling.templateName == 'groupOngoingVideoCall'
  }

  isHideThread() {
    return isMobile() ? this.screen != 'CHAT' : false;
  }

  isHideChatScreen() {
    return isMobile() ? this.screen != 'MSG' : false;
  }

}
