import {Action} from '@ngrx/store';

export const ADD_ERROR = '[Error] Add error';
export const REMOVE_ERROR = '[Error] Remove error';

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
}

export type Actions
  = AddErrorAction
  | RemoveErrorAction
  ;
