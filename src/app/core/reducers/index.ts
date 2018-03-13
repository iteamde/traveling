import { Params, RouterStateSnapshot } from '@angular/router';
import {Action, ActionReducer, ActionReducerMap, MetaReducer} from '@ngrx/store';
import {createSelector} from 'reselect';


// Imports from reducers
import * as fromCore from './core.reducer';
import * as fromAuth from '../../auth/reducers/auth.reducer';


/**
 * Top level state declaration
 */
export interface State {
  core: fromCore.State;
  auth: fromAuth.State;
}


// Map of the reducers
export const reducers: ActionReducerMap<State> = {
  core: fromCore.reducer,
  auth: fromAuth.reducer,
};

/**
 * Selectors returns smaller piece of state out of the root state
 */

export const getCoreState = (state: State) => state.core;
export const getAuthState = (state: State) => state.auth;

export const getLoggedUser = createSelector(getAuthState, fromAuth.getLoggedUser);
export const getRegistationStep = createSelector(getAuthState, fromAuth.getRegistrationStep);
export const getAuthModalRef = createSelector(getAuthState, fromAuth.getAuthModalRef);
export const getAuthError = createSelector(getAuthState, fromAuth.getAuthError);
export const getResetPasswordStatus = createSelector(getAuthState, fromAuth.getResetPasswordStatus);



