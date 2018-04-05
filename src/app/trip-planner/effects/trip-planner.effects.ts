import {Injectable} from '@angular/core';
import {Actions, Effect} from '@ngrx/effects';
import * as error from '../../core/actions/error.actions';
import * as tripPlanner from '../actions/trip-planner.actions';

import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/of';
import {TripPlannerService} from '../services/trip-planner.service';
import {Router} from '@angular/router';
import {getOpenedModalRef, State} from '../../core/reducers';
import {Observable} from '../../../../node_modules/rxjs';
import {Store} from '@ngrx/store';
import {ApiService} from '../../core/services/api.service';


@Injectable()
export class TripPlannerEffects {

  private payload: any;
  public modalRef$: Observable<any>;

  /**
   * Creates trip plan
   */
  @Effect()
  createTrip$ = this.actions$.ofType(tripPlanner.CREATE_TRIP)
    .switchMap((action: tripPlanner.CreateTripAction) => this.tripPlannerService.createTrip({...action.payload})
    .map(response => this.responseHandler(response, tripPlanner.CreateTripSuccessAction , `/trip/${response.data.trip_id}/cities`)));

  @Effect()
  cancelTrip$ = this.actions$.ofType(tripPlanner.CANCEL_TRIP)
    .switchMap((action: tripPlanner.CancelTripAction) => this.tripPlannerService.cancelTrip(action.payload.details, action.payload.url)
    .map( response => this.responseHandler(response, tripPlanner.EmptyAction , 'home')));

  @Effect()
  saveTrip$ = this.actions$.ofType(tripPlanner.SAVE_TRIP)
    .switchMap((action: tripPlanner.SaveTripAction) => this.tripPlannerService.publishTrip(action.payload.details, action.payload.url)
    .map( response => this.responseHandler(response, tripPlanner.EmptyAction , 'home')));

  /**
   * Add city to trip
   */
  @Effect()
  addCity$ = this.actions$.ofType(tripPlanner.ADD_CITY)
    .switchMap((action: tripPlanner.AddCityAction) =>
      this.tripPlannerService.addCity(action.payload.trip_id, action.payload.details)
      .map(response => this.responseHandler(response, tripPlanner.AddCitySuccessAction , action.payload.urlTo, action.payload.details)));

  /**
   * Add place to trip
   */
  @Effect()
  addPlace$ = this.actions$.ofType(tripPlanner.ADD_PLACE)
    .switchMap((action: tripPlanner.AddPlaceAction) =>
      this.tripPlannerService.addPlace(action.payload.trip_id, action.payload.details)
      .map(response => this.responseHandler(response, tripPlanner.AddPlaceSuccessAction , action.payload.urlTo, action.payload)));


  @Effect()
  finishCity$ = this.actions$.ofType(tripPlanner.SAVE_CITY)
    .switchMap((action: tripPlanner.SaveCityAction) =>
        this.tripPlannerService.saveCityInfo(action.payload.data, action.payload.url)
        .map(response => this.responseHandler(response, tripPlanner.SaveCitySuccessAction, false, action.payload)));

  @Effect()
  removeCity$ = this.actions$.ofType(tripPlanner.DELETE_CITY)
    .switchMap((action: tripPlanner.DeleteCityAction) =>
      this.tripPlannerService.removeCityInfo(action.payload.data, action.payload.url)
      .map(response => this.responseHandler(response, tripPlanner.DeleteCitySuccessAction, false, action.payload)));

  @Effect()
  finishPlace$ = this.actions$.ofType(tripPlanner.SAVE_PLACE)
    .switchMap((action: tripPlanner.SavePlaceAction) =>
       this.tripPlannerService.saveCityInfo(action.payload.data, action.payload.url)
          .map(response => this.responseHandler(response, tripPlanner.SavePlaceSuccessAction, false, action.payload)));

  @Effect()
  deletePlace$ = this.actions$.ofType(tripPlanner.DELETE_PLACE)
    .switchMap((action: tripPlanner.DeletePlaceAction) =>
      this.tripPlannerService.removePlaceInfo(action.payload.data, action.payload.url)
      .map(response => this.responseHandler(response, tripPlanner.DeletePlaceSuccessAction, false, action.payload)));

  /**
   * Default constructor
   * @param actions$
   * @param tripPlannerService
   * @param router
   */
  constructor(private actions$: Actions,
              private tripPlannerService: TripPlannerService,
              private api: ApiService,
              private router: Router,
              private store: Store<State>
  ) {
    this.modalRef$ = this.store.select(getOpenedModalRef);
  }

  responseHandler(res, onSuccess, urlTo, hook?) {
    if (res.success) {
      if (hook )  this.modalRef$.take(1).subscribe(ref => ref && ref.close());
      if (urlTo) this.router.navigate([ urlTo]);
      return  new onSuccess(hook || res);
    }
    return new error.AddErrorAction(res.data && res.data.message);
  }

}
