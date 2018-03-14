import * as core from '../actions/core.actions';
import {ActionReducer} from '@ngrx/store';
import {OPEN_MODAL} from '../actions/core.actions';



export interface State {
  openedModalRef: any;
}

export const INIT_STATE: State = {
  openedModalRef: null
};

/**
 * Exports reducing function
 * @param state
 * @param action
 */
export function reducer(state: State = INIT_STATE, action: core.Actions) {
  switch (action.type) {
    case OPEN_MODAL:
      return {...state, openedModalRef : action.payload.ref};

    default: {
      return state;
    }
  }
}

export const getOpenedModalRef = (state: State) => state.openedModalRef;



