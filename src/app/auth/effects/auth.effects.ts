import {Injectable} from '@angular/core';
import {Actions, Effect} from '@ngrx/effects';

import * as auth from '../actions/auth.actions';
import * as error from '../../core/actions/error.actions';
import {ApiService} from '../../core/services/api.service';

import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/switchMapTo';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/empty';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/of';
import {Router} from '@angular/router';
import {AuthHelper} from '../helpers/auth.helper';



@Injectable()
export class AuthEffects {
  /**
   * Registers user with given dataconstructor(puauth: fromAuth.reducer,blic payload) {}
   */
  @Effect()
  register$ = this.actions$.ofType(auth.REGISTER)
    .switchMap((action: auth.RegisterAction) =>
        this.apiService.post( action.payload.queryUrl, {...action.payload.data})
       .map( res => this.responseHandler(res, action.payload.urlTo, auth.RegistrationSuccessAction , error.AddErrorAction)));

  @Effect()
  login$ = this.actions$.ofType(auth.LOGIN)
    .switchMap((action: auth.LoginAction) =>
       this.apiService.post( action.payload.queryUrl, {...action.payload.data})
       .map( res => this.responseHandler(res, action.payload.urlTo, auth.LoginSuccessAction , error.AddErrorAction)));

  @Effect()
  loginSuccess$ = this.actions$.ofType(auth.LOGIN_SUCCESS)
  .map((action: auth.LoginAction) => {
    this.authHelper.setAuthToken(action.payload.data.token);
    return new auth.EmptyAction();
  } );

  @Effect()
  reset$ = this.actions$.ofType(auth.RESET_PASSWORD)
    .switchMap((action: auth.ResetPasswordAction) =>
       this.apiService.post(action.payload.queryUrl, {...action.payload.data})
       .map( res => this.responseHandler(res, false, auth.ResetPasswordSuccessAction , error.AddErrorAction)));



  @Effect()
  setPassword$ = this.actions$.ofType(auth.SET_PASSWORD)
    .switchMap((action: auth.SetPasswordAction) =>
      this.apiService.post(action.payload.queryUrl, {...action.payload.data})
      .map( res => this.responseHandler(res, false, auth.SetPasswordSuccessAction , error.AddErrorAction)));

  /**
   * Default constructor
   * @param actions$
   * @param ApiService
   */
  constructor(private actions$: Actions,
              private apiService: ApiService,
              private router: Router,
              private authHelper: AuthHelper
             ) {}

  responseHandler(res, urlTo,  suc , onError) {
    if (res && res.success) {
      if (urlTo) this.router.navigate([urlTo]);
      return new suc(res);
    } else {
      return new onError(res.data);
    }
  }
}
