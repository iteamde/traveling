import * as tripPlanner from '../actions/trip-planner.actions';
import {ImmutableHelperService} from '../../core/services/immutable-helper.service';

const helper = new ImmutableHelperService();

export interface State {
  trip_id: number;
  citiesInfo: any;
  alreadySpend: number;
}


export const INIT_STATE: State = {
  trip_id: null,
  citiesInfo: {
    activeCity : {},
    cities: []
  },
  alreadySpend: 0
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
      return {...state, citiesInfo : action.payload, alreadySpend : 0};

    case tripPlanner.ADD_CITY_SUCCESS:
      return {...state,
                citiesInfo: {
                ...state.citiesInfo,
                  activeCity : action.payload.res,
                  cities : helper.pushItem(state.citiesInfo.cities, action.payload.res)
            }
      };

    case tripPlanner.ADD_PLACE_SUCCESS:
      return {...state,
        citiesInfo: {
          ...state.citiesInfo,
          cities : helper.replaceItem(state.citiesInfo.cities, action.payload.res.helper)
        }
      };

    case tripPlanner.SAVE_CITY_SUCCESS:
      return {...state,
        citiesInfo: {
          ...state.citiesInfo,
          cities : helper.setItemProperty(state.citiesInfo.cities, action.payload.helper)
        }
      };

    case tripPlanner.DELETE_CITY_SUCCESS:
      return {...state,
        citiesInfo: {
          ...state.citiesInfo,
          cities : helper.removeItem(state.citiesInfo.cities, action.payload.helper)
        }
      };

    case tripPlanner.SET_ACTIVE_CITY:
      return {...state,
        citiesInfo: {
          ...state.citiesInfo,
          activeCity :  action.payload
        }
      };

    case tripPlanner.SAVE_PLACE_SUCCESS:
      return {...state,
        alreadySpend : state.alreadySpend + +action.payload.data.budget,
        citiesInfo: {
          ...state.citiesInfo,
          cities :  helper.replaceItem(state.citiesInfo.cities, action.payload.helper)
        },
      };

    case tripPlanner.DELETE_PLACE_SUCCESS:
      return {...state,
        citiesInfo: {
          ...state.citiesInfo,
          cities :  helper.replaceItem(state.citiesInfo.cities, action.payload.helper)
        }
      };

    default :
      return state;
  }
}

export const getTripId = (state: State) => state.trip_id;
export const  getCitiesInfo = (state: State) => state.citiesInfo;
export const  getAlreadySpent = (state: State) => state.alreadySpend;
