import {Action} from '@ngrx/store';


export const SET_ACTIVE_TAB = '[Profile] set active tab';

export class SetActiveTabAction implements Action {
  readonly type = SET_ACTIVE_TAB;

  constructor(public payload) {

  }
}


export type Actions = SetActiveTabAction;
