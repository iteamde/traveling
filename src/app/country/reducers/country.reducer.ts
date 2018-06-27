import * as country from '../actions/country.actions';
import * as flatten from 'lodash/flatten';

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

    case country.UNFOLLOW_SUCCESS:
      return {...state, country: {
          ...state.country,
          numOfFollowers : state.country.numOfFollowers - 1,
          followStatus: false
        }};

    default :
      return state;
  }
}

export const getCountry = (state: State) => state.country;
export const getCountryInfo = (state: State) => state.country.info;
export const getCountryStats = (state: State) => state.country.stats;
export const getCountryId = (state: State) => state.country.info.id;
export const getFollowStatus = (state: State) => state.country.followStatus;
export const getCountryPlaces = (state: State) => state.country.places;
export const getCountryHolidays = (state: State) => state.country.info.holidays;
export const getCountryMedia = (state: State) => state.country.media;
export const getTripMedia = (state: State) => state.country.plans.map(res => res.medias);
// export const getPlacesMedia = (state: State) => flatten(state.country.places.filter( (arr) => arr.medias.length).slice(0,10)
//   .map(res => res.medias.map(res1 => res1))).slice(0, 10);
export const getPlacesMedia = (state: State) => flatten(state.country.places.filter( (arr) => arr.medias.length)
  .map(res => res.medias.map(res1 => res1)));
export const getCountryTrendingPlaces = (state: State) => state.country.trendingPlaces.places;
