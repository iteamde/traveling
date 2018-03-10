import * as auth from '../actions/auth.actions';


export interface State {
  user: any;
  registrationStep: number;
  authModalRef: any;
  authError: any;
}


export const INIT_STATE: State = {
  user: null,
  registrationStep: 0,
  authModalRef: null,
  authError: null
};

/**
 * Exports reducing function
 * @param state
 * @param action
 */
export function reducer(state: State = INIT_STATE, action: auth.Actions) {
  switch (action.type) {

    case auth.OPEN_MODAL:
      return {...state, authModalRef : action.payload.ref};

    case auth.REMOVE_MODAL_REF:
      return {...state, authModalRef : null};

    case auth.SET_REGISTRATION_STEP:
      return {...state, registrationStep : action.payload};

    case auth.REGISTER:
      return {...state, user: {...state.user, ...action.payload.data}};

    case auth.REGISTRATION_SUCCESS:
      return {...state, user: {...state.user, ...action.payload.data}};

    case auth.REGISTRATION_FAILED:
      return {...state, authError : action.payload};

    default :
      return state;
  }
}


export const getLoggedUser = (state: State) => state.user;
export const getRegistrationStep = (state: State) => state.registrationStep;
export const getAuthModalRef = (state: State) => state.authModalRef;
export const getAuthError = (state: State) => state.authError;
