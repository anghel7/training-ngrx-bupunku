import { createReducer, on } from '@ngrx/store';
import { replace, addPlanet, loadPlanets, loadedPlanets } from './planet.actions';
import { Planet } from './planets/models/planet';

export const initialState: Planet[] = [];

export const PlanetReducer = createReducer(
    initialState,
    on(replace, (state, { list }) => list),
    on(addPlanet, (state, { item }) => {
        return [...state, item];
    }),
    on(loadPlanets, (state)=> {
        // console.log('Debug loadPlanets> ', state);
        return state;
    } ),
    on(loadedPlanets, (state, { list })=> {
        return [...list];
    } )
);