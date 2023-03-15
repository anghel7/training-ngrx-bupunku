import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RxjsWebSocketComponent } from './rxjs-web-socket/rxjs-web-socket.component';
import { WebSocketTestComponent } from './web-socket-test/web-socket-test.component';

const routes: Routes = [
  {
    path: 'planets',
    loadChildren: () => import('./planets/planets.module').then(m => m.PlanetsModule)
  },
  {
    path: 'websocket',
    component: WebSocketTestComponent
  },
  {
    path: 'rxjswebsocket',
    component: RxjsWebSocketComponent
  },
  {
    path: '**',
    redirectTo: '/planets',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
