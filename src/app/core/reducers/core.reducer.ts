import {
  CLOSE_LEFT_MOBILE_MENU, CLOSE_MOBILE_SIDEBAR,
  OPEN_LEFT_MOBILE_MENU, OPEN_MOBILE_SIDEBAR,
  OPEN_MODAL
} from '../actions/core.actions';

import * as core from '../actions/core.actions';


export interface State {
  openedModalRef: any;
  openLeftMobileMenu: boolean;
  openMobileSideBar: boolean;
}

export const INIT_STATE: State = {
  openedModalRef: null,
  openLeftMobileMenu: false,
  openMobileSideBar: false
}
/**
 * Exports reducing function
 * @param state
 * @param action
 */
export function reducer(state: State = INIT_STATE, action: core.Actions) {
  switch (action.type) {
    case OPEN_MODAL:
      return {...state, openedModalRef: action.payload.ref};

    case OPEN_LEFT_MOBILE_MENU:
      return {...state, openLeftMobileMenu: true };

    case CLOSE_LEFT_MOBILE_MENU:
      return {...state, openLeftMobileMenu: false };

    case OPEN_MOBILE_SIDEBAR:
      return {...state, openMobileSideBar: true };

    case CLOSE_MOBILE_SIDEBAR:
      return {...state, openMobileSideBar: false };


    default: {
      return state;
    }
  }
}

export const getOpenedModalRef = (state: State) => state.openedModalRef;
export const getOpenLeftMobileMenu = (state: State) => state.openLeftMobileMenu;
export const getOpenMobileSideBar = (state: State) => state.openMobileSideBar;



