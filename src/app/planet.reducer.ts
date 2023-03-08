import { createReducer, on } from '@ngrx/store';
import { replace, push } from './planet.actions';
import { Planet } from './planets/models/planet';

export const initialState: Planet[] = [];

export const PlanetReducer = createReducer(
    initialState,
    on(replace, (state, { list }) => list),
    on(push, (state, { item }) => {
        return [...state, item];
    })
);