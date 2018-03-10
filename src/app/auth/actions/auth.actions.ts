import {Action} from '@ngrx/store';

export const REGISTER = '[Auth] Register user';
export const REGISTER2 = '[Auth] Register user step 2';
export const OPEN_MODAL = '[Auth] Open modal';
export const REMOVE_MODAL_REF = '[Auth] Remove modal ref';
export const SET_REGISTRATION_STEP = '[Auth] set registration step';
export const REGISTRATION_SUCCESS = '[Auth] registration success';
export const REGISTRATION_FAILED = '[Auth] registration failed';

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

export class RegisterAction2 implements Action {
  readonly type = REGISTER2;

  /**
   * Default constructor
   * @param payload
   */
  constructor(public payload) {}
}
/**
 * Registration success action
 */

export class RegistrationSuccessAction implements Action {
  readonly type = REGISTRATION_SUCCESS;

  constructor(public payload) {}
}

/**
 * Registration failed action
 */

export class RegistrationFailedAction implements Action {
  readonly type = REGISTRATION_FAILED;

  constructor(public payload) {}
}

/**
 * Open auth modal
 */

export class OpenModalAction implements Action {
  readonly type = OPEN_MODAL;

  /**
   * Default constructor
   * @param payload
   */
  constructor(public payload) {}
}

export class RemoveModalRef implements Action {
  readonly type = REMOVE_MODAL_REF;
}

export class SetRegistrationStep implements Action {
  readonly type = SET_REGISTRATION_STEP;

  constructor(public payload: number) {}
}


export type Actions = RegisterAction
  | OpenModalAction
  | RemoveModalRef
  | SetRegistrationStep
  | RegisterAction2
  | RegistrationFailedAction
  | RegistrationSuccessAction;


