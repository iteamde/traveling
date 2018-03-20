import { ActionReducerMap} from '@ngrx/store';
import {createSelector} from 'reselect';


// Imports from reducers
import * as fromCore from './core.reducer';
import * as fromError from './error.reducer';
import * as fromAuth from '../../auth/reducers/auth.reducer';
import * as fromTripPlanner from '../../trip-planner/reducers/trip-planner.reducer';


/**
 * Top level state declaration
 */
export interface State {
  core: fromCore.State;
  auth: fromAuth.State;
  error: fromError.State;
  tripPlanner: fromTripPlanner.State;
}


// Map of the reducers
export const reducers: ActionReducerMap<State> = {
  core: fromCore.reducer,
  auth: fromAuth.reducer,
  error: fromError.reducer,
  tripPlanner: fromTripPlanner.reducer
};

/**
 * Selectors returns smaller piece of state out of the root state
 */
export const getCoreState = (state: State) => state.core;
export const getAuthState = (state: State) => state.auth;
export const getErrorState = (state: State) => state.error;
export const getTripPlannerState = (state: State) => state.tripPlanner;

/**
 *  Core selectors
 */
export const getOpenedModalRef = createSelector(getCoreState, fromCore.getOpenedModalRef);

/**
 *  Error selectors
 */
export const getErrorFromServer = createSelector(getErrorState, fromError.getErrorFromServer);


/**
 *  Auth selectors selectors
 */

export const getLoggedUser = createSelector(getAuthState, fromAuth.getLoggedUser);
export const getRegistationStep = createSelector(getAuthState, fromAuth.getRegistrationStep);
export const getResetPasswordStatus = createSelector(getAuthState, fromAuth.getResetPasswordStatus);
export const getUserId = createSelector(getAuthState, fromAuth.getUserId);

/**
 * Trip planner selectors
 */
export const getTripId = createSelector(getTripPlannerState, fromTripPlanner.getTripId);





