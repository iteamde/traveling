import * as places from '../actions/places.actions';


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
export const getPlacesId = (state: State) => state.places.info.place.id;
export const getFollowPlacesStatus = (state: State) => state.places.followStatus;
// export const getPlacesNearby = (state: State) => state.places.nearby.filter(res => Object.keys(res.firstmedia).length > 1).slice(0, 10)
//   .map(res => res.firstmedia);
export const getPlacesNearby = (state: State) => state.places.nearby.filter(res => Object.keys(res.firstmedia).length > 1)
  .map(res => res.firstmedia);
export const getPlacesImg = (state: State) => state.places.media;
export const getPlacesPlans = (state: State) => state.places.plans.plans;


