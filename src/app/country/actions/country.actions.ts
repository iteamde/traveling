import {Action} from '@ngrx/store';

export const FOLLOW_COUNTRY = '[Country] follow country';

export class FollowCountryAction implements Action {
  readonly type = FOLLOW_COUNTRY;

}

export type Actions
  = FollowCountryAction;

