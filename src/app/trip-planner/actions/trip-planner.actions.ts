import {Action} from '@ngrx/store';

export const CREATE_TRIP = '[Trip-planner] creates trip';
export const CREATE_TRIP_SUCCESS = '[Trip-planner] create trip success';
export const ADD_CITY = '[Trip-planner] add city to trip';
export const ADD_CITY_SUCCESS = '[Trip-planner] add city to trip success';
export const ADD_PLACE = '[Trip-planner] add place to trip';
export const ADD_PLACE_SUCCESS = '[Trip-planner] add place to trip success';
export const SET_CITY_INFO = '[Trip-planner] set city info';
export const SAVE_CITY = '[Trip-planner] save city';
export const SAVE_CITY_SUCCESS = '[Trip-planner] save success city';
export const DELETE_CITY = '[Trip-planner] delete city';
export const DELETE_CITY_SUCCESS = '[Trip-planner] delete success city';
export const SET_ACTIVE_CITY = '[Trip-planner] set active city';
export const SAVE_PLACE = '[Trip-planner] save place details';
export const SAVE_PLACE_SUCCESS = '[Trip-planner] save place details success';
export const DELETE_PLACE = '[Trip-planner] delete place details';
export const DELETE_PLACE_SUCCESS = '[Trip-planner] delete place  success';
export const CANCEL_TRIP = '[Trip-planner] cancel trip';
export const SAVE_TRIP = '[Trip-planner] save trip';
export const EMPTY = 'Empty';


export class EmptyAction implements Action {
  readonly type = EMPTY;

}

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

  public payload: {trip_id: string, details: any, urlTo: string};
  /**
   * Default constructor
   * @param trip_id,
   * @param details
   */
  constructor(private trip_id, private details, private urlTo) {
    this.payload = {trip_id, details, urlTo};
  }
}

/**
 * Add city to trip success
 */
export class AddCitySuccessAction implements Action {
  readonly type = ADD_CITY_SUCCESS;

  constructor(public payload) {
  }
}

/**
 * Add place to trip
 */
export class AddPlaceAction implements Action {
  readonly type = ADD_PLACE;


  public payload: {trip_id: string, details: Object, urlTo: string, helper: Object};
  /**
   * Default constructor
   * @param trip_id,
   * @param details
   */
  constructor(private trip_id, private details,  private urlTo, private helper) {
    this.payload = {trip_id, details, urlTo, helper};
  }
}

/**
 * Add place to trip success
 */
export class AddPlaceSuccessAction implements Action {
  readonly type = ADD_PLACE_SUCCESS;

  constructor(public payload) { }
}


export class SetCityInfoAction implements Action {
  readonly type = SET_CITY_INFO;

  /**
   * Default constructor
   * @param payload
   */
  constructor(public payload) { }
}

export class SaveCityAction implements Action {
  readonly type = SAVE_CITY;

  constructor(public payload) { }
}

export class SaveCitySuccessAction implements Action {
  readonly type = SAVE_CITY_SUCCESS;

  constructor(public payload) { }
}
export class DeleteCityAction implements Action {
  readonly type = DELETE_CITY;

  constructor(public payload) { }
}

export class DeleteCitySuccessAction implements Action {
  readonly type = DELETE_CITY_SUCCESS;

  constructor(public payload) { }
}

export class SetActiveCityAction implements Action {
  readonly type = SET_ACTIVE_CITY;

  constructor(public payload) { }
}

export class SavePlaceAction implements Action {
  readonly type = SAVE_PLACE;

  constructor(public payload) { }
}

export class SavePlaceSuccessAction implements Action {
  readonly type = SAVE_PLACE_SUCCESS;

  constructor(public payload) { }
}

export class DeletePlaceAction implements Action {
  readonly type = DELETE_PLACE;

  constructor(public payload) { }
}

export class DeletePlaceSuccessAction implements Action {
  readonly type = DELETE_PLACE_SUCCESS;

  constructor(public payload) { }
}

export class CancelTripAction implements Action {
  readonly type = CANCEL_TRIP;

  constructor(public payload) { }
}

export class SaveTripAction implements Action {
  readonly type = SAVE_TRIP;

  constructor(public payload) { }
}

export type Actions
  = CreateTripAction
  | CreateTripSuccessAction
  | AddCityAction
  | AddCitySuccessAction
  | AddPlaceAction
  | AddPlaceSuccessAction
  | SetCityInfoAction
  | SaveCityAction
  | SaveCitySuccessAction
  | DeleteCityAction
  | DeleteCitySuccessAction
  | SetActiveCityAction
  | SavePlaceAction
  | SavePlaceSuccessAction
  | DeletePlaceAction
  | DeletePlaceSuccessAction
  | CancelTripAction
  | EmptyAction
  | SaveTripAction;

