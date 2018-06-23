import * as places from '../actions/places.actions';
import * as flatten from 'lodash/flatten';

export interface State {
  places: any;
}


export const INIT_STATE: State = {
  places: null,
};

/**
 * Exports reducing function
 * @param state
 * @param action
 */
export function reducer(state: State = INIT_STATE, action: places.Actions) {
  switch (action.type) {

    case places.SET_PLACES_INFO:
      return {...state, places: action.payload};

    case places.FOLLOW_SUCCESS:
      return {...state, places: {
        ...state.places,
        numOfFollowers : state.places.numOfFollowers + 1,
        followStatus: true
      }};

    case places.UNFOLLOW_SUCCESS:
      return {...state, places: {
        ...state.places,
        numOfFollowers : state.places.numOfFollowers - 1,
        followStatus: false
      }};

    default :
      return state;
  }

}

export const getPlaces = (state: State) => state.places;

// export const getCountryInfo = (state: State) => state.country.info;
// export const getCountryStats = (state: State) => state.country.stats;
export const getPlacesId = (state: State) => state.places.info.place.id;
export const getFollowPlacesStatus = (state: State) => state.places.followStatus;
export const getPlacesNearby = (state: State) => state.places.nearby.filter(res => Object.keys(res.firstmedia).length > 1).slice(0, 10)
  .map(res => res.firstmedia)
export const getPlacesImg = (state: State) => state.places.media;
export const getPlacesPlans = (state: State) => state.places.plans.plans;

// export const getCountryHolidays = (state: State) => state.country.info.holidays;
// export const getCountryMedia = (state: State) => state.country.media;
// export const getTripMedia = (state: State) => state.country.plans.map(res => res.medias);
// export const getPlacesMedia = (state: State) => flatten(state.country.places.filter( (arr) => arr.medias.length).slice(0,10)
//   .map(res => res.medias.map(res1 => res1))).slice(0, 10);

