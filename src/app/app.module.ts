import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { HttpClientModule } from '@angular/common/http';
import { PlanetReducer } from './planet.reducer';
import { EffectsModule } from '@ngrx/effects';
import { PlanetEffects } from './planet.effects';
import { WebSocketTestComponent } from './web-socket-test/web-socket-test.component';
import { FormsModule } from '@angular/forms';
import { RxjsWebSocketComponent } from './rxjs-web-socket/rxjs-web-socket.component';

@NgModule({
  declarations: [
    AppComponent,
    WebSocketTestComponent,
    RxjsWebSocketComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    StoreModule.forRoot({ planets: PlanetReducer }),
    EffectsModule.forRoot([PlanetEffects])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
