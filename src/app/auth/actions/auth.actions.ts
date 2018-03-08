import {Action} from '@ngrx/store';

export const REGISTER = '[Auth] Register user';


/**
 * Registers new user. (Currently just with given email and password)
 */
export class RegisterAction implements Action {
  readonly type = REGISTER;

  /**
   * Default constructor
   * @param payload
   */
  constructor(public payload) {}
}



export type Actions = RegisterAction;

