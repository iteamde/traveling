import {Action} from '@ngrx/store';

export const FOLLOW_COUNTRY = '[Country] follow country';
export const UNFOLLOW_COUNTRY = '[Country] unfollow country';
export const SET_COUNTRY_INFO = '[Country] set country info';
export const FOLLOW_SUCCESS = '[Country] follow country success';
export const UNFOLLOW_SUCCESS = '[Country] unfollow country success';

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

export class UnfollowCountryAction implements Action {
  readonly type = UNFOLLOW_COUNTRY;

  constructor(public payload) {
  }
}

export class UnfollowSuccessAction implements Action {
  readonly type = UNFOLLOW_SUCCESS;

}

export type Actions
  = FollowCountryAction
  | SetCountryInfoAction
  | FollowSuccessAction
  | UnfollowCountryAction
  | UnfollowSuccessAction;

