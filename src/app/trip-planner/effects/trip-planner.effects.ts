import {Injectable} from '@angular/core';

import * as error from '../../core/actions/error.actions';
import * as tripPlanner from '../actions/trip-planner.actions';
import {TripPlannerService} from '../services/trip-planner.service';
import {go} from '../../core/actions/router.actions';
import {CloseOpenedModalAction} from '../../core/actions/core.actions';

import {Actions, Effect} from '@ngrx/effects';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/map';

@Injectable()
export class TripPlannerEffects {

  /**
   * Create trip plan
   */
  @Effect()
  createTrip$ = this.actions$.ofType(tripPlanner.CREATE_TRIP)
    .switchMap((action: tripPlanner.CreateTripAction) => this.tripPlannerService.createTrip({...action.payload})
      .map(response => response.success ?
        new tripPlanner.CreateTripSuccessAction(response) :
        new error.AddErrorAction(response.data && response.data.message)));

  /**
   * Create trip plan success
   */
  @Effect()
  createTripSuccess$ = this.actions$.ofType(tripPlanner.CREATE_TRIP_SUCCESS)
    .map((action: tripPlanner.CreateTripSuccessAction) =>  go(`/trip/${action.payload.data.trip_id}/cities`));

  /**
   * Cancel trip plan
   */
  @Effect()
  cancelTrip$ = this.actions$.ofType(tripPlanner.CANCEL_TRIP)
    .switchMap((action: tripPlanner.CancelTripAction) => this.tripPlannerService.cancelTrip(action.payload.url, action.payload.details)
      .map(() => go(`/home`)));

  /**
   * Save trip plan
   */
  @Effect()
  saveTrip$ = this.actions$.ofType(tripPlanner.SAVE_TRIP)
    .switchMap((action: tripPlanner.SaveTripAction) => this.tripPlannerService.publishTrip(action.payload.url, action.payload.details)
      .map(() => go(`/home`)));

  /**
   * Add city to trip
   */
  @Effect()
  addCity$ = this.actions$.ofType(tripPlanner.ADD_CITY)
    .switchMap((action: tripPlanner.AddCityAction) =>
      this.tripPlannerService.addCity(action.payload.trip_id, action.payload.details)
        .map(response => response.success ?
          new tripPlanner.AddCitySuccessAction({res: action.payload.details || response, urlTo: action.payload.urlTo }) :
          new error.AddErrorAction(response.data && response.data.message)));

  /**
   * Add city to trip success
   */
  @Effect()
  addCitySuccess$ = this.actions$.ofType(tripPlanner.ADD_CITY_SUCCESS)
    .mergeMap((action: tripPlanner.AddCitySuccessAction) => ([go(action.payload.urlTo), new CloseOpenedModalAction()]));

  /**
   * Add place to trip
   */
  @Effect()
  addPlace$ = this.actions$.ofType(tripPlanner.ADD_PLACE)
    .switchMap((action: tripPlanner.AddPlaceAction) =>
      this.tripPlannerService.addPlace(action.payload.trip_id, action.payload.details)
        .map(response => response.success ?
          new tripPlanner.AddPlaceSuccessAction({res: action.payload , urlTo: action.payload.urlTo }) :
          new error.AddErrorAction(response.data && response.data.message)));
  /**
   * Add place to trip success
   */
  @Effect()
  addPlaceSuccess$ = this.actions$.ofType(tripPlanner.ADD_PLACE_SUCCESS)
    .mergeMap((action: tripPlanner.AddPlaceSuccessAction) => ([go(action.payload.urlTo), new CloseOpenedModalAction()]));

  /**
   * Save city info  to trip
   */
  @Effect()
  finishCity$ = this.actions$.ofType(tripPlanner.SAVE_CITY)
    .switchMap((action: tripPlanner.SaveCityAction) =>
      this.tripPlannerService.saveCityInfo(action.payload.url, action.payload.data)
        .map(response => response.success ?
          new tripPlanner.SaveCitySuccessAction(action.payload) :
          new error.AddErrorAction(response.data && response.data.message)));

  /**
   * Remove city info  from trip
   */
  @Effect()
  removeCity$ = this.actions$.ofType(tripPlanner.DELETE_CITY)
    .switchMap((action: tripPlanner.DeleteCityAction) =>
      this.tripPlannerService.removeCityInfo(action.payload.url, action.payload.data)
        .map(response => response.success ?
          new tripPlanner.DeleteCitySuccessAction(action.payload) :
          new error.AddErrorAction(response.data && response.data.message)));

  /**
   * Save place info  from trip
   */
  @Effect()
  finishPlace$ = this.actions$.ofType(tripPlanner.SAVE_PLACE)
    .switchMap((action: tripPlanner.SavePlaceAction) =>
      this.tripPlannerService.savePlaceInfo(action.payload.url, action.payload.data)
        .map(response => response.success ?
          new tripPlanner.SavePlaceSuccessAction(action.payload) :
          new error.AddErrorAction(response.data && response.data.message)));

  /**
   * Remove place info  from trip
   */
  @Effect()
  removePlace$ = this.actions$.ofType(tripPlanner.DELETE_PLACE)
    .switchMap((action: tripPlanner.DeletePlaceAction) =>
      this.tripPlannerService.removePlaceInfo(action.payload.url, action.payload.data)
        .map(response => response.success ?
          new tripPlanner.DeletePlaceSuccessAction(action.payload) :
          new error.AddErrorAction(response.data && response.data.message)));

  /**
   * Default constructor
   * @param actions$
   * @param tripPlannerService
   */
  constructor(private actions$: Actions,
              private tripPlannerService: TripPlannerService,
  ) {}
}
