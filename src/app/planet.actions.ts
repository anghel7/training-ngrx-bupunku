import { createAction, props } from '@ngrx/store';
import { Planet } from './planets/models/planet';

export const replace = createAction('[Planet List Component] Replace', props<{list: Array<Planet>}>());
export const push = createAction('[Planet List Component] Push', props<{item: Planet}>());