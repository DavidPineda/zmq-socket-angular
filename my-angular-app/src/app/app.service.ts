import { Injectable } from '@angular/core';
import { Socket } from 'ngx-socket-io';

@Injectable()
export class AppService {

  constructor(private socket: Socket) { }

  sendMessage(msg: string) {
    this.socket.emit("message-name", msg);
  }

  getMessage() {
    return this.socket
      .fromEvent("message-name");
  }
}
