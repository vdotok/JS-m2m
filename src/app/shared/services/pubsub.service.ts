import { Injectable, Output } from '@angular/core';
import { StorageService } from './storage.service';
declare const CVDOTOK: any;

@Injectable()
export class PubsubService {
  @Output() public Client: any;
  constructor() { }

  public initConfigure(): void {
    const user = StorageService.getUserData();
    this.Client = new CVDOTOK.Client({
      projectId: "1RN1RP",
      host: `${user.media_server_map.complete_address}`,
      stunServer: `${user.stun_server_map.complete_address}`,
      ignorePublicIP: true
    });
    this.Client.on("connected", (res) => {
      let user = StorageService.getUserData();
      console.log('*before Register==>',user.ref_id.toString(),
      user.authorization_token.toString());
      
      this.Client.Register(
        user.ref_id.toString(),
        user.authorization_token.toString()
      );
    });
  }

  public groupCall(params): any {
    console.log("*** in group call", params);
    return this.Client.GroupCall(params);
  }






  
  joinGroupCall(params): void {
    console.log("*** joinGroupCall:\n", params);
    
    this.Client.JoinGroupCall(params);
  }

  leaveGroupCall(uuid): void {
    this.Client.LeaveGroupCall(uuid);
  }

  setCameraOn(): void {
    this.Client.SetCameraOn();
  }

  setCameraOff(): void {
    this.Client.SetCameraOff();
  }

  setMicMute(uuid): void {
    console.log("*** pubsub service setmute: \n", uuid);   
    this.Client.SetMicMute(uuid);
  }

  setMicUnmute(uuid): void {
    console.log("*** pubsub service setunmute: \n", uuid);
    this.Client.SetMicUnmute(uuid);
  }

  setParticipantVideo(participant, vidio) {
    this.Client.SetParticipantVideo(participant, vidio);
  }

}
