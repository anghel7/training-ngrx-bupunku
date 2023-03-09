import { createAction, props } from '@ngrx/store';
import { Planet } from './planets/models/planet';

export const replace = createAction('[Planet List Component] Replace', props<{ list: Array<Planet> }>());
export const push = createAction('[Planet List Component] Push', props<{ item: Planet }>());
export const loadPlanets = createAction('[Planet List] Load Planets');
export const loadedPlanets = createAction('[Planet List] Loaded Success', props<{ list: Planet[] }>());