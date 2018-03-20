import {Injectable} from '@angular/core';
import {Actions, Effect} from '@ngrx/effects';
import * as error from '../../core/actions/error.actions';
import * as tripPlanner from '../actions/trip-planner.actions';

import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/of';
import {TripPlannerService} from '../services/trip-planner.service';
import {Router} from '@angular/router';


@Injectable()
export class TripPlannerEffects {

  private urlTo: string;

  /**
   * Creates trip plan
   */
  @Effect()
  createTrip$ = this.actions$.ofType(tripPlanner.CREATE_TRIP)
    .switchMap((action: tripPlanner.CreateTripAction) => this.tripPlannerService.createTrip({...action.payload}))
    .map(response => this.responseHandler(response, tripPlanner.CreateTripSuccessAction , `/trip/${response.data.trip_id}/cities`));

  /**
   * Add city to trip
   */
  @Effect()
  addCity$ = this.actions$.ofType(tripPlanner.ADD_CITY)
    .switchMap((action: tripPlanner.AddCityAction) => {
      this.urlTo = action.payload.urlTo;
      return this.tripPlannerService.addCity(action.payload.trip_id, action.payload.details);
    })
    .map(response => this.responseHandler(response, tripPlanner.CreateTripSuccessAction , this.urlTo));

  /**
   * Add place to trip
   */
  @Effect()
  addPlace$ = this.actions$.ofType(tripPlanner.ADD_PLACE)
    .switchMap((action: tripPlanner.AddPlaceAction) => this.tripPlannerService.addPlace(action.payload.trip_id, action.payload.details)
      .map(response => this.responseHandler(response, tripPlanner.CreateTripSuccessAction , false)));


  /**
   * Default constructor
   * @param actions$
   * @param tripPlannerService
   * @param router
   */
  constructor(private actions$: Actions,
              private tripPlannerService: TripPlannerService,
              private router: Router,
  ) {
  }

  responseHandler(res, onSucces, urlTo) {
    if (res.success) {
      if (urlTo) this.router.navigate([ urlTo]);
      /*go(`/trip/${res.data.trip_id}/cities`);*/
      return new tripPlanner.CreateTripSuccessAction(res);
    }
      return new error.AddErrorAction(res.data.message);
  }
}
