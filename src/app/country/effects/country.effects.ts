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
      .map( response => this.responseHandler(response, country.FollowSuccessAction )));


  /**
   * Unfollow country
   */
  @Effect()
  unfollow$ = this.actions$.ofType(country.UNFOLLOW_COUNTRY)
    .switchMap((action: country.UnfollowCountryAction) => this.countryService.unfollowCountry(action.payload)
      .map( response => this.responseHandler(response, country.UnfollowSuccessAction )));

  /**
   * Default constructor
   * @param actions$
   * @param countryService
   * @param router
   */
  constructor(private actions$: Actions,
              private countryService: CountryService
  ) {
  }

  responseHandler(res, onSuccess, urlTo?, hook?) {
    if (res.success) {
      return  new onSuccess(hook || res);
    }
    return new error.AddErrorAction(res.data && res.data.message);
  }

}
