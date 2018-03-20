import {Action} from '@ngrx/store';

export const ADD_ERROR = '[Core] Add error';
export const REMOVE_ERROR = '[Core] Remove error';

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
