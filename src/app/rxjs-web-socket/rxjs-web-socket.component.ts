import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';
import { loadPlanets, addPlanet } from '../planet.actions';
import { Planet } from '../planets/models/planet';
import { WebSocketRxjsService } from '../web-socket-rxjs.service';

const subList: Subscription[] = [];

@Component({
  selector: 'app-rxjs-web-socket',
  templateUrl: './rxjs-web-socket.component.html',
  styleUrls: ['./rxjs-web-socket.component.scss'],
  providers: [WebSocketRxjsService]
})
export class RxjsWebSocketComponent implements OnInit, OnDestroy {

  planetDataSource$: Observable<Planet[]>;

  constructor(
    private store: Store<{ planets: Planet[] }>,
    private webSocketService: WebSocketRxjsService
  ) {
    this.planetDataSource$ = store.select('planets');
  }

  ngOnInit(): void {
    this.store.dispatch(loadPlanets());
    this.startConection();
    this.startSendingSms();
  }

  private startConection() {
    let sub1 = this.webSocketService.webSocketObservable
      .subscribe((msg) => {
        let planet = msg as Planet;
        this.store.dispatch(addPlanet({ item: planet }));
      });
    subList.push(sub1);
  }

  private startSendingSms(): void {
    setTimeout(() => {
      setInterval(() => {
        this.webSocketService.sendMessage('some repeated message from client');
      }, 3000)
    }, 2000);
  }

  ngOnDestroy(): void {
    subList.forEach(sub => {
      sub.unsubscribe();
    });
    this.webSocketService.closeConnection();
  }

}
