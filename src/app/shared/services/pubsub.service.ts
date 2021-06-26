import { Injectable, OnDestroy, Output } from '@angular/core';
import { StorageService } from './storage.service';
declare const CVDOTOK: any;

@Injectable()
export class PubsubService {
  @Output()
  public Client: any;

  constructor() {
  }

  public initConfigure(): void {
    this.Client = new CVDOTOK.ManyToMany({
      projectID: "U6WM5",
      secret: "ff0682f386006952e6cc8a4e831e81ce",
    });
    this.Client.on("connected", (res) => {
      let user = StorageService.getUserData();
      this.Client.Register(
        user.ref_id.toString(),
        user.authorization_token.toString()
      );
    });
  }

  public Disconnect(): void {
    // this.Client.Disconnect();
  }

  groupCall(params): void {
    this.Client.GroupCall(params);
  }

  joinGroupCall(params): void {
    this.Client.JoinGroupCall(params);
  }

  rejectCall(): void {
    this.Client.RejectCall();
  }

  endCall(): void {
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
