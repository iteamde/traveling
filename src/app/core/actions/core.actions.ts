import {Action} from '@ngrx/store';

export const OPEN_MODAL = '[Core] Open modal';

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

export type Actions = OpenModalAction;
