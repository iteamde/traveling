import * as tripPlanner from '../actions/trip-planner.actions';
import {ADD_CITY} from '../actions/trip-planner.actions';

export interface State {
  trip_id: number;
  citiesInfo: any;
}


export const INIT_STATE: State = {
  trip_id: null,
  citiesInfo: null,
};

/**
 * Exports reducing function
 * @param state
 * @param action
 */
export function reducer(state: State = INIT_STATE, action: tripPlanner.Actions) {
  switch (action.type) {

    case tripPlanner.CREATE_TRIP_SUCCESS:
      return {...state, trip_id : action.payload.data.trip_id};

    case tripPlanner.SET_CITY_INFO:
      return {...state, citiesInfo : action.payload};

    case tripPlanner.ADD_CITY_SUCCESS:
      return {...state,
                citiesInfo: {
                ...state.citiesInfo,
                  activeCity : action.payload,
                  cities : insertItem(state.citiesInfo.cities, action.payload)
            },

      };

    default :
      return state;
  }
}

export const getTripId = (state: State) => state.trip_id;
export const  getCitiesInfo = (state: State) => state.citiesInfo;


function insertItem(array, action) {
  const newArray = array.slice();
  newArray.splice(action.index, 0, action.item);
  return newArray;
}

function removeItem(array, action) {
  const newArray = array.slice();
  newArray.splice(action.index, 1);
  return newArray;
}
