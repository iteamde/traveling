import {Action} from '@ngrx/store';

export const REGISTER = '[Auth] Register user';
export const SET_REGISTRATION_STEP = '[Auth] set registration step';
export const REGISTRATION_SUCCESS = '[Auth] registration success';
export const LOGIN = '[Auth] login user';
export const LOGIN_SUCCESS = '[Auth] login su  ccess';
export const RESET_PASSWORD = '[Auth] reset password email request';
export const RESET_PASSWORD_SUCCESS = '[Auth] reset password email request success';
export const SET_PASSWORD = '[Auth] set password';
export const SET_PASSWORD_SUCCESS = '[Auth] set password success';
export const CLEAR_PASSWORD_STATUS = '[Auth] clear password status';


/**
 * Registers new user. (Currently just with given email and password)
 */
export class LoginAction implements Action {
  readonly type = LOGIN;

  /**
   * Default constructor
   * @param payload
   */
  constructor(public payload: {data: any, queryUrl: string, returnUrl?: string}) {}
}

export class LoginSuccessAction implements Action {
  readonly type = LOGIN_SUCCESS;

  /**
   * Default constructor
   * @param payload
   */
  constructor(public payload) {}
}

/**
 * Registers new user. (Currently just with given email and password)
 */
export class RegisterAction implements Action {
  readonly type = REGISTER;

  /**
   * Default constructor
   * @param payload
   */
  constructor(public payload: {data: any, queryUrl: string, urlTo: string}) {}
}

/**
 * Registration success action
 */

export class RegistrationSuccessAction implements Action {
  readonly type = REGISTRATION_SUCCESS;

  constructor(public payload) {}
}

export class SetRegistrationStep implements Action {
  readonly type = SET_REGISTRATION_STEP;

  constructor(public payload: number) {}
}

export class ResetPasswordAction implements Action {
  readonly type = RESET_PASSWORD;

  constructor(public payload: {data: any, queryUrl: string}) {}
}

export class SetPasswordAction implements Action {
  readonly type = SET_PASSWORD;

  constructor(public payload: {data: any, queryUrl: string}) {}
}
export class SetPasswordSuccessAction implements Action {
  readonly type = SET_PASSWORD_SUCCESS;

  constructor(public payload: {data: any, queryUrl: string}) {}
}

export class ClearPasswordStatus implements Action {
  readonly type = CLEAR_PASSWORD_STATUS;

}

export class ResetPasswordSuccessAction implements Action {
  readonly type = RESET_PASSWORD_SUCCESS;

  constructor(public payload) {}
}




export type Actions = RegisterAction
  | SetRegistrationStep
  | LoginAction
  | LoginSuccessAction
  | ResetPasswordAction
  | ResetPasswordSuccessAction
  | SetPasswordAction
  | SetPasswordSuccessAction
  | ClearPasswordStatus
  | RegistrationSuccessAction;


