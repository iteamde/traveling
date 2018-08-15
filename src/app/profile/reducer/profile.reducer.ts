import * as profile from '../actions/profile.actions';


export interface State {
  profile: {
    activeTab: string
  };
}

export const INIT_STATE: State = {
  profile: {
    activeTab: 'trip-plans'
  }
};


export function reducer(state: State = INIT_STATE, action: profile.Actions) {

  switch (action.type) {

    case profile.SET_ACTIVE_TAB:
      return {...state, profile: {...state.profile, activeTab: action.payload}};

    default:
      return state;
  }
}


export const getProfile = (state: State) => state.profile;
export const getActiveTab = (state: State) => state.profile.activeTab;
