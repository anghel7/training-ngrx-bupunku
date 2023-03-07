import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Planet } from '../../models/planet';
import { PlanetService } from '../../services/planet.service';

@Component({
  selector: 'app-planet-list',
  templateUrl: './planet-list.component.html',
  styleUrls: ['./planet-list.component.scss']
})
export class PlanetListComponent {

  planetDataSource$: Observable<Planet[]>;

  constructor(private planetService: PlanetService) {
    this.planetDataSource$ = this.planetService.getAll();
  }
}
