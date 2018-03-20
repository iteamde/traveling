import * as tripPlanner from '../actions/trip-planner.actions';

export interface State {
  trip_id: number;
}


export const INIT_STATE: State = {
  trip_id: null,
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

    default :
      return state;
  }
}

export const getTripId = (state: State) => state.trip_id;
