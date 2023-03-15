import { Injectable } from '@angular/core';
import { AnonymousSubject } from 'rxjs/internal/Subject';
import { Subject, map, Observable, Observer } from 'rxjs';

const CHAT_URL = "ws://localhost:8000";

export interface Message {
  source: string;
  content: string;
}

@Injectable()
export class WebSocketService {

  private subject: AnonymousSubject<MessageEvent>;
  public messages: Subject<Message>;

  constructor() {
    this.messages = <Subject<Message>>this.connect(CHAT_URL)
      .pipe(
        map((response: MessageEvent): Message => {
          let data = JSON.parse(response.data);
          return data;
        })
      );
  }

  connect(url: string): AnonymousSubject<MessageEvent> {
    if (!this.subject) {
      this.subject = this.create(url);
      console.log('Successfully conected: ' + url);
    }
    return this.subject;
  }

  create(url: string): AnonymousSubject<MessageEvent> {
    let ws = new WebSocket(url);
    let observable = new Observable((obs: Observer<MessageEvent>) => {
      ws.onmessage = obs.next.bind(obs);
      ws.onerror = obs.error.bind(obs);
      ws.onclose = obs.complete.bind(obs);
      return ws.close.bind(ws);
    });
    let observer = {
      error: () => { },
      complete: () => { },
      next: (data: Object) => {
        console.log('Message sent to websocket ', data);
        if (ws.readyState == WebSocket.OPEN) {
          ws.send(JSON.stringify(data));
        }
      }
    };
    return new AnonymousSubject<MessageEvent>(observer, observable);
  }
}
