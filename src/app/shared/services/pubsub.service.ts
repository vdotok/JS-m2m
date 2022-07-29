import { Injectable, Output } from '@angular/core';
import { StorageService } from './storage.service';
declare const CVDOTOK: any;

@Injectable()
export class PubsubService {
  @Output() public Client: any;
  constructor() { }

  public initConfigure(): void {
    const user = StorageService.getUserData();
    this.Client = new CVDOTOK.ManyToMany({
      projectID: "143LV8M8",
      secret: "3d9686b635b15b5bc2d19800407609fa",
      host: `${user.media_server_map.protocol}://${user.media_server_map.host}:${user.media_server_map.port}/${user.media_server_map.end_point}`
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

  groupCall(params): void {
    this.Client.GroupCall(params);
  }

  joinGroupCall(params): void {
    this.Client.JoinGroupCall(params);
  }

  leaveGroupCall(): void {
    this.Client.LeaveGroupCall();
  }

  setCameraOn(): void {
    this.Client.SetCameraOn();
  }

  setCameraOff(): void {
    this.Client.SetCameraOff();
  }

  setMicMute(): void {
    this.Client.SetMicMute();
  }

  setMicUnmute(): void {
    this.Client.SetMicUnmute();
  }

  setParticipantVideo(participant, vidio) {
    this.Client.SetParticipantVideo(participant, vidio);
  }

}
