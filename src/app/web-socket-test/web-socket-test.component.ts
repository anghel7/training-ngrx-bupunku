import { Component } from '@angular/core';
import { WebSocketService } from '../web-socket.service';

@Component({
  selector: 'app-web-socket-test',
  templateUrl: './web-socket-test.component.html',
  styleUrls: ['./web-socket-test.component.scss'],
  providers: [WebSocketService]
})
export class WebSocketTestComponent {

  title = 'socketrv';
  content = '';
  received:any[] = [];
  sent:any[] = []

  constructor(private WebsocketService: WebSocketService) {
    WebsocketService.messages.subscribe(msg => {      
      console.log(msg);
      this.received.push(msg);
      console.log("Response from websocket: ", msg);
    });
  }

  sendMsg() {
    let message = {
      source: '',
      content: ''
    };
    message.source = 'localhost';
    message.content = this.content;

    this.sent.push(message);
    this.WebsocketService.messages.next(message);
  }
  
}
