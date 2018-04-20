import * as country from '../actions/country.actions';

export interface State {
  country: any;
}


export const INIT_STATE: State = {
  country: null,
};

/**
 * Exports reducing function
 * @param state
 * @param action
 */
export function reducer(state: State = INIT_STATE, action: country.Actions) {
  switch (action.type) {

    case country.SET_COUNTRY_INFO:
      return {...state, country : action.payload};

    case country.FOLLOW_SUCCESS:
      return {...state, country: {
          ...state.country,
          numOfFollowers : state.country.numOfFollowers + 1,
          followStatus: true
         }};

    default :
      return state;
  }
}

export const getCountry = (state: State) => state.country;
export const getCountryId = (state: State) => state.country.info.id;
export const getFollowStatus = (state: State) => state.country.followStatus;


