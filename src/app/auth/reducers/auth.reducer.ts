import * as auth from '../actions/auth.actions';


export interface State {
  user: any;
  registrationStep: number;
  authModalRef: any;
  authError: any;
  isLoggedIn: boolean;
  resetPasswordStatus: string;
}


export const INIT_STATE: State = {
  user: null,
  registrationStep: 0,
  authModalRef: null,
  authError: null,
  isLoggedIn: false,
  resetPasswordStatus: ''
};

/**
 * Exports reducing function
 * @param state
 * @param action
 */
export function reducer(state: State = INIT_STATE, action: auth.Actions) {
  switch (action.type) {

    case auth.LOGIN:
      return state;

    case auth.LOGIN_SUCCESS:
      return {...state, user : action.payload.data, isLoggedIn: true};

    case auth.LOGIN_FAILED:
      return {...state, authError : action.payload.data.message};

    case auth.SET_REGISTRATION_STEP:
      return {...state, registrationStep : action.payload};

    case auth.REGISTER:
      return {...state, user: {...state.user, ...action.payload.data}};

    case auth.REGISTRATION_SUCCESS:
      return {...state, user: {...state.user, ...action.payload}, registrationStep:  state.registrationStep + 1, authError: null };

    case auth.REGISTRATION_FAILED:
      return {...state, authError : action.payload};

    case auth.RESET_PASSWORD_SUCCESS:
      return {...state, resetPasswordStatus : 'emailSent'};
    case auth.RESET_PASSWORD_ERROR:
      return {...state, resetPasswordStatus : 'error'};

    default :
      return state;
  }
}


export const getLoggedUser = (state: State) => state.user;
export const getRegistrationStep = (state: State) => state.registrationStep;
export const getAuthError = (state: State) => state.authError;
export const getResetPasswordStatus = (state: State) => state.resetPasswordStatus;
