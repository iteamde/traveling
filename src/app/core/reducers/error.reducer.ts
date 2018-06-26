import {ADD_ERROR, REMOVE_ERROR} from '../actions/error.actions';

import * as error from '../actions/error.actions';

export interface State {
  errorFromServer: any;
}

export const INIT_STATE: State = {
  errorFromServer: null
};

/**
 * Exports reducing function
 * @param state
 * @param action
 */
export function reducer(state: State = INIT_STATE, action: error.Actions) {
  switch (action.type) {

    case ADD_ERROR:
      return {...state, errorFromServer : action.payload};

    case REMOVE_ERROR:
      return {...state, errorFromServer : null};

    default: {
      return state;
    }
  }
}

export const getErrorFromServer = (state: State) => state.errorFromServer;



