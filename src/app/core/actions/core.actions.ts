import {Action} from '@ngrx/store';

export const OPEN_MODAL = '[Core] Open modal';
export const CLOSE_OPENED_MODAL = '[Core] Close opened modal';
export const OPEN_LEFT_MOBILE_MENU = '[Core] Open left mobile menu';
export const CLOSE_LEFT_MOBILE_MENU = '[Core] Close left mobile menu';
export const OPEN_MOBILE_SIDEBAR = '[Core] Open mobile sidebar';
export const CLOSE_MOBILE_SIDEBAR = '[Core] Close mobile sidebar';

/**
 * Open  modal
 */
export class OpenModalAction implements Action {
  readonly type = OPEN_MODAL;

  /**
   * Default constructor
   * @param payload
   */
  constructor(public payload) {}
}

export class CloseOpenedModalAction implements Action {
  readonly type = CLOSE_OPENED_MODAL;
}

export class OpenLeftMobileMenu implements Action {
  readonly type = OPEN_LEFT_MOBILE_MENU;
}

export class CloseLeftMobileMenu implements Action {
  readonly type = CLOSE_LEFT_MOBILE_MENU;
}

export class OpenMobileSideBar implements Action {
  readonly type = OPEN_MOBILE_SIDEBAR;
}

export class CloseMobileSideBar implements Action {
  readonly type = CLOSE_MOBILE_SIDEBAR;
}


export type Actions
  = OpenModalAction
  | CloseOpenedModalAction
  | OpenLeftMobileMenu
  | CloseLeftMobileMenu
  | OpenMobileSideBar
  | CloseMobileSideBar;
