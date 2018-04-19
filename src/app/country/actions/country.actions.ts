import {Action} from '@ngrx/store';

export const FOLLOW_COUNTRY = '[Country] follow country';
export const SET_COUNTRY_INFO = '[Country] set country info';
export const FOLLOW_SUCCESS = '[Country] follow country success';

export class FollowCountryAction implements Action {
  readonly type = FOLLOW_COUNTRY;

  constructor(public payload) {
  }
}

export class SetCountryInfoAction implements Action {
  readonly type = SET_COUNTRY_INFO;

   constructor(public payload) {
   }
}

export class FollowSuccessAction implements Action {
  readonly type = FOLLOW_SUCCESS;

}

export type Actions
  = FollowCountryAction
  | SetCountryInfoAction
  | FollowSuccessAction;

