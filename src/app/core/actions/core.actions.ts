import {Action} from '@ngrx/store';

export const OPEN_MODAL = '[Core] Open modal';
export const ADD_ERROR = '[Core] Add error';
export const REMOVE_ERROR = '[Core] Remove error';

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

/**
 * Add error from server
 */

export class AddErrorAction implements Action {
  readonly type = ADD_ERROR;

  /**
   * Default constructor
   * @param payload
   */
  constructor(public payload) {}
}

/**
 * Remove error from server
 */

export class RemoveErrorAction implements Action {
  readonly type = REMOVE_ERROR;

  /**
   * Default constructor
   * @param payload
   */
  constructor(public payload) {}
}

export type Actions
  = OpenModalAction
  | AddErrorAction
  | RemoveErrorAction
  ;
