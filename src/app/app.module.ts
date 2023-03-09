import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { HttpClientModule } from '@angular/common/http';
import { PlanetReducer } from './planet.reducer';
import { EffectsModule } from '@ngrx/effects';
import { PlanetEffects } from './planet.effects';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    StoreModule.forRoot({ planets: PlanetReducer }),
    EffectsModule.forRoot([PlanetEffects])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
