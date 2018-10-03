import {Injectable} from '@angular/core';
import {Actions, Effect} from '@ngrx/effects';

import {PlacesService} from '../services/places.service';
import {AllowSpinnerService} from '../../core/services/allowSpinner.service';
import * as error from '../../core/actions/error.actions';
import * as places from '../actions/places.actions';

import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/map';


@Injectable()
export class PlacesEffects {

  /**
   * Follow place
   */
  @Effect()
  follow$ = this.actions$.ofType(places.FOLLOW_PLACES)
    .switchMap((action: places.FollowPlacesAction) => this.placesService.followPlaces(action.payload)
      .map( res => res.success ? new places.FollowSuccessAction(action.payload) : new error.AddErrorAction(res.data)));

  /**
   * Unfollow place
   */
  @Effect()
  unfollow$ = this.actions$.ofType(places.UNFOLLOW_PLACES)
    .switchMap((action: places.UnfollowPlacesAction) => this.placesService.unfollowPlaces(action.payload)
      .map( res => res.success ? new places.UnfollowSuccessAction(action.payload) : new error.AddErrorAction(res.data)));

  // bottom 2 effect after this comment are to add or delete your card at followers-list
  // when there will be authorization we can do it with user_id and follow_status in template
  /**
   * UnfollowSuccess place
   */
  @Effect()
  unfollowSuccess$ = this.actions$.ofType(places.UNFOLLOW_SUCCESS)
    .switchMap((action: places.UnfollowPlacesAction) => {
    this.allowSpinnerService.allowSpinner.next(false);
    return this.placesService.checkFollowers(action.payload)
        .map( res => res.success ? new places.SetPlacesInfoAction({followers: res}) : new error.AddErrorAction(res.data))
    });

  /**
   * FollowSuccess place
   */
  @Effect()
  followSuccess$ = this.actions$.ofType(places.FOLLOW_SUCCESS)
    .switchMap((action: places.FollowPlacesAction) => {
    this.allowSpinnerService.allowSpinner.next(false);
    return this.placesService.checkFollowers(action.payload)
        .map( res => res.success ? new places.SetPlacesInfoAction({followers: res}) : new error.AddErrorAction(res.data))
    });

  /**
   * Default constructor
   * @param actions$
   * @param placesService
   * @param router
   */
  constructor(private actions$: Actions,
              private placesService: PlacesService,
              private allowSpinnerService: AllowSpinnerService) {}
}
