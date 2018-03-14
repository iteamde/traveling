import {Action} from '@ngrx/store';

export const CREATE_TRIP = '[Trip-planner] creates trip';
export const CREATE_TRIP_SUCCESS = '[Trip-planner] create trip success';
export const ADD_CITY = '[Trip-planner] add city to trip';
export const ADD_CITY_SUCCESS = '[Trip-planner] add city to trip success';
export const ADD_PLACE = '[Trip-planner] add place to trip';
export const ADD_PLACE_SUCCESS = '[Trip-planner] add place to trip success';
export const TRIP_PLANNER_FAILED = '[Trip-planner] failed';

/**
 * Creates new trip
 */
export class CreateTripAction implements Action {
  readonly type = CREATE_TRIP;

  /**
   * Default constructor
   * @param payload
   */
  constructor(public payload) { }
}

/**
 * Create trip success
 */
export class CreateTripSuccessAction implements Action {
  readonly type = CREATE_TRIP_SUCCESS;

  /**
   * Default constructor
   * @param payload
   */
  constructor(public payload) {}
}

/**
 * Add city to trip
 */
export class AddCityAction implements Action {
  readonly type = ADD_CITY;

  public payload: {trip_id: string, details: Object};
  /**
   * Default constructor
   * @param trip_id,
   * @param details
   */
  constructor(private trip_id, private details) {
    this.payload = {trip_id, details};
  }
}

/**
 * Add city to trip success
 */
export class AddCitySuccessAction implements Action {
  readonly type = ADD_CITY_SUCCESS;
}

/**
 * Add place to trip
 */
export class AddPlaceAction implements Action {
  readonly type = ADD_PLACE;


  public payload: {trip_id: string, details: Object};
  /**
   * Default constructor
   * @param trip_id,
   * @param details
   */
  constructor(private trip_id, private details) {
    this.payload = {trip_id, details};
  }
}

/**
 * Add place to trip success
 */
export class AddPlaceSuccessAction implements Action {
  readonly type = ADD_PLACE_SUCCESS;
}

/**
 * Trip planner failed
 */
export class TripPlannerFailedAction implements Action {
  readonly type = TRIP_PLANNER_FAILED;

  /**
   * Default constructor
   * @param payload
   */
  constructor(public payload) {}
}

export type Actions
  = CreateTripAction
  | CreateTripSuccessAction
  | AddCityAction
  | AddCitySuccessAction
  | AddPlaceAction
  | AddPlaceSuccessAction
  | TripPlannerFailedAction;

