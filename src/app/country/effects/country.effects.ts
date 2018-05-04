import {Injectable} from '@angular/core';
import {Actions, Effect} from '@ngrx/effects';
import * as error from '../../core/actions/error.actions';
import * as country from '../actions/country.actions';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/map';
import {CountryService} from '../services/country.service';


@Injectable()
export class CountryEffects {

  /**
   * Follow country
   */
  @Effect()
  follow$ = this.actions$.ofType(country.FOLLOW_COUNTRY)
    .switchMap((action: country.FollowCountryAction) => this.countryService.followCountry(action.payload)
      .map( res => res.success ? new country.FollowSuccessAction() : new error.AddErrorAction(res.data)));


  /**
   * Unfollow country
   */
  @Effect()
  unfollow$ = this.actions$.ofType(country.UNFOLLOW_COUNTRY)
    .switchMap((action: country.UnfollowCountryAction) => this.countryService.unfollowCountry(action.payload)
      .map( res => res.success ? new country.UnfollowSuccessAction() : new error.AddErrorAction(res.data)));

  /**
   * Default constructor
   * @param actions$
   * @param countryService
   * @param router
   */
  constructor(private actions$: Actions,
              private countryService: CountryService
  ) {}
}
