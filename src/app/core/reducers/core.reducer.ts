import * as core from '../actions/core.actions';
import {ActionReducer} from '@ngrx/store';
import {FINISH_LOADING} from '../actions/core.actions';


export interface State {
   isLoad: boolean;
}

export const INIT_STATE: State = {
  isLoad: false
};

/**
 * Exports reducing function
 * @param state
 * @param action
 */
export function reducer(state: State = INIT_STATE, action: core.Actions) {
  switch (action.type) {
    case FINISH_LOADING:
      return {
        isLoad: true
      };

    default: {
      return state;
    }
  }
}



