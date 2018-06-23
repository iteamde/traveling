import {Action} from '@ngrx/store';

export const SET_PLACES_INFO = '[Places] set places info';
export const FOLLOW_PLACES = '[Places] follow places';
export const UNFOLLOW_PLACES = '[Places] unfollow places';
export const FOLLOW_SUCCESS = '[Places] follow places success';
export const UNFOLLOW_SUCCESS = '[Places] unfollow places success';



export class SetPlacesInfoAction implements Action {
  readonly type = SET_PLACES_INFO;

  constructor(public payload) {
  }
}

export class FollowPlacesAction implements Action {
  readonly type = FOLLOW_PLACES;

  constructor(public payload) {
  }
}

export class FollowSuccessAction implements Action {
  readonly type = FOLLOW_SUCCESS;

}

export class UnfollowPlacesAction implements Action {
  readonly type = UNFOLLOW_PLACES;

  constructor(public payload) {
  }
}


export class UnfollowSuccessAction implements Action {
  readonly type = UNFOLLOW_SUCCESS;

}





export type Actions
  = SetPlacesInfoAction
  | FollowSuccessAction
  | UnfollowPlacesAction
  | UnfollowSuccessAction
  | FollowPlacesAction;
