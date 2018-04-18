import {Injectable} from '@angular/core';
import {Actions, Effect} from '@ngrx/effects';
import * as error from '../../core/actions/error.actions';
import * as countryAction from '../actions/country.actions';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/of';
import {Router} from '@angular/router';
import {State} from '../../core/reducers';
import {Store} from '@ngrx/store';
import {CountryService} from '../services/country.service';


@Injectable()
export class CountryEffects {

  /**
   * Creates trip plan
   */


  /**
   * Default constructor
   * @param actions$
   * @param countryService
   * @param router
   */
  constructor(private actions$: Actions,
              private router: Router,
              private store: Store<State>
  ) {
  }

  responseHandler(res, onSuccess, urlTo, hook?) {
    if (res.success) {
      return  new onSuccess(hook || res);
    }
    return new error.AddErrorAction(res.data && res.data.message);
  }

}
