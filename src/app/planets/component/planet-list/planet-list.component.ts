import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Planet } from '../../models/planet';
import { PlanetService } from '../../services/planet.service';
import { replace, loadPlanets } from '../../../planet.actions';

@Component({
  selector: 'app-planet-list',
  templateUrl: './planet-list.component.html',
  styleUrls: ['./planet-list.component.scss']
})
export class PlanetListComponent implements OnInit {

  planetDataSource$: Observable<Planet[]>;

  constructor(private store: Store<{ planets: Planet[] }>, private planetService: PlanetService) {
    this.planetDataSource$ = store.select('planets');
  }

  ngOnInit(): void {
    /*
    this.planetService.getAll()
      .subscribe(data => {
        this.store.dispatch(replace({
          list: data
        }));
      });
    */
   this.store.dispatch(loadPlanets());
  }
}
