import {Injectable} from '@angular/core';
import {Actions, Effect} from '@ngrx/effects';
import { of } from 'rxjs/observable/of';

import {PlacesService} from '../services/places.service';

import * as error from '../../core/actions/error.actions';
import * as places from '../actions/places.actions';

import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/map';

@Injectable()
export class PlacesEffects {

  // /**
  //  * Follow place
  //  */
  // @Effect()
  // follow$ = this.actions$.ofType(places.FOLLOW_PLACES)
  //   .switchMap((action: places.FollowPlacesAction) => {
  //   console.log(action);
  //   this.placesService.followPlaces(action.payload)
  //     .subscribe(res => res.success ? new places.FollowSuccessAction() : new error.AddErrorAction(res.data));
  //   return of(action);
  // })
  //   .switchMap((action: places.FollowPlacesAction) => this.placesService.checkFollowers(action.payload)
  //     .map( res => res.success ? new places.SetPlacesInfoAction({followers: res}) : new error.AddErrorAction(res.data)));



  /**
   * Follow place
   */
  @Effect()
  follow$ = this.actions$.ofType(places.FOLLOW_PLACES)
    .switchMap((action: places.FollowPlacesAction) => this.placesService.followPlaces(action.payload)
      .map( res => res.success ? new places.FollowSuccessAction() : new error.AddErrorAction(res.data)));




  /**
   * Unfollow place
   */
  @Effect()
  unfollow$ = this.actions$.ofType(places.UNFOLLOW_PLACES)
    .switchMap((action: places.UnfollowPlacesAction) => this.placesService.unfollowPlaces(action.payload)
      .map( res => res.success ? new places.UnfollowSuccessAction() : new error.AddErrorAction(res.data)));





  /**
   * Default constructor
   * @param actions$
   * @param placesService
   * @param router
   */
  constructor(private actions$: Actions,
              private placesService: PlacesService) {}
}
