import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { webSocket, WebSocketSubject } from 'rxjs/webSocket';

@Injectable()
export class WebSocketRxjsService {

  private webSocketSubject: WebSocketSubject<any> = webSocket('ws://localhost:8000');

  constructor() { }

  get webSocketObservable(): Observable<any> {
    return this.webSocketSubject.asObservable();
  }

  sendMessage(message: any): void {
    this.webSocketSubject.next(message);
  }

  closeConnection(): void {
    this.webSocketSubject.complete();
  }

}
