import { Params, RouterStateSnapshot } from '@angular/router';
import {Action, ActionReducer, ActionReducerMap, MetaReducer} from '@ngrx/store';
import {createSelector} from 'reselect';


// Imports from reducers
import * as fromCore from './core.reducer';


/**
 * Top level state declaration
 */
export interface State {
  core: fromCore.State;
}


// Map of the reducers
export const reducers: ActionReducerMap<State> = {
  core: fromCore.reducer,
};

/**
 * Selectors returns smaller piece of state out of the root state
 */

export const getCoreState = (state: State) => state.core;



