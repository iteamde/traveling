import * as auth from '../actions/auth.actions';


export interface State {
  user: any;
  registrationStep: number;
}


export const INIT_STATE: State = {
  user: null,
  registrationStep: 0
};

/**
 * Exports reducing function
 * @param state
 * @param action
 */
export function reducer(state: State = INIT_STATE, action: auth.Actions) {
  switch (action.type) {

    case auth.REGISTER:
      return {...state, user: action.payload, registrationStep : 1};

    default :
      return state;
  }
}


export const getLoggedUser = (state: State) => state.user;
export const getRegistrationStep = (state: State) => state.registrationStep;
