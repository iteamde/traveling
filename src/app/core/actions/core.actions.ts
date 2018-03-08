import {Action} from '@ngrx/store';

export const FINISH_LOADING = '[Core] finish loading';

export class SaveToStoreAction implements Action {
  readonly type = FINISH_LOADING;

  /**
   * Default constructor
   * @param payload
   */
  constructor(public payload: {isLoad?: boolean; }) {}
}

export type Actions = SaveToStoreAction;
