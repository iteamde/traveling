import {Action} from '@ngrx/store';

export const OPEN_MODAL = '[Core] Open modal';
export const CLOSE_OPENED_MODAL = '[Core] Close opened modal';

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



export type Actions
  = OpenModalAction;
