import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PlanetsRoutingModule } from './planets-routing.module';
import { PlanetListComponent } from './component/planet-list/planet-list.component';


@NgModule({
  declarations: [
    PlanetListComponent
  ],
  imports: [
    CommonModule,
    PlanetsRoutingModule
  ],
  exports:[
    PlanetListComponent
  ]
})
export class PlanetsModule { }
