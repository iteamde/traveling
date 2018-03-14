import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {Actions, Effect} from '@ngrx/effects';

import * as tripPlanner from '../actions/trip-planner.actions';

import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/of';
import {Action} from '@ngrx/store';
import {of} from 'rxjs/observable/of';
import {go} from '../../core/actions/router.actions';
import {TripPlannerService} from '../services/trip-planner.service';
import {Router} from '@angular/router';


@Injectable()
export class TripPlannerEffects {

  /**
   * Creates trip plan
   */
  @Effect()
  createTrip$ = this.actions$.ofType(tripPlanner.CREATE_TRIP)
    .switchMap((action: tripPlanner.CreateTripAction) => this.tripPlannerService.createTrip({...action.payload}))
    .map(response => this.responseHandler(response));

  /**
   * Add city to trip
   */
  @Effect()
  addCity$ = this.actions$.ofType(tripPlanner.ADD_CITY)
    .switchMap((action: tripPlanner.AddCityAction) => this.tripPlannerService.addCity(action.payload.trip_id, action.payload.details)
      .map(response => response.success ?
        new tripPlanner.AddCitySuccessAction() :
        new tripPlanner.TripPlannerFailedAction(response)));

  /**
   * Add place to trip
   */
  @Effect()
  addPlace$ = this.actions$.ofType(tripPlanner.ADD_PLACE)
    .switchMap((action: tripPlanner.AddPlaceAction) => this.tripPlannerService.addPlace(action.payload.trip_id, action.payload.details)
      .map(response => response.success ?
        new tripPlanner.AddPlaceSuccessAction() :
        new tripPlanner.TripPlannerFailedAction(response)));

  /**
   * Open modal window
   */
  /*@Effect()
  openModal$ = this.actions$.ofType(auth.OPEN_MODAL)
    .switchMap((action: auth.OpenModalAction) => {
      return  Observable.of({type: 'REGISTRATION111_FAILED'});
    });*/
  /**
   * Default constructor
   * @param actions$
   * @param tripPlannerService
   * @param router
   */
  constructor(private actions$: Actions,
              private tripPlannerService: TripPlannerService,
              private router: Router
  ) {
  }

  responseHandler(res) {
    if (res.success) {
      this.router.navigate([`/trip/${res.data.trip_id}/cities`]);
      /*go(`/trip/${res.data.trip_id}/cities`);*/
      return new tripPlanner.CreateTripSuccessAction(res.data.trip_id)
    }
      return new tripPlanner.TripPlannerFailedAction(res)
  }
}
