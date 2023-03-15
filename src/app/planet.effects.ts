import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, EMPTY, exhaustMap, map, tap } from 'rxjs';
import { PlanetService } from './planets/services/planet.service';


@Injectable()
export class PlanetEffects {
  constructor(
    private actions$: Actions,
    private planetService: PlanetService
  ) { }

  loadPlanets$ = createEffect(() => {
    const somedata = this.actions$.pipe(
      tap(data => {
        // console.log('Debug BEFORE ofType observable: ', data);              
      }),
      ofType('[Planet List] Load Planets'),
      tap(data => {
        // console.log('Debug ofType observable: ', data);
      }),
      exhaustMap((data) => {
        // console.log('Debug ExhautMap rxjs operator: ', data);
        return this.planetService.getAll()
          .pipe(
            // map(planets => ({ type: '[Planet List] Loaded Success', list: planets })),
            map(planets => ({ type: '[Planet List Component] Replace', list: planets })),

            catchError(() => EMPTY)
          );
      })
    );
    // console.log('Debug Return Data Observable: ', somedata);
    return somedata
  }
  );
}