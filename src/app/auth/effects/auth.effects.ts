import {Injectable} from '@angular/core';
import {Actions, Effect} from '@ngrx/effects';

import * as auth from '../actions/auth.actions';
import * as error from '../../core/actions/error.actions';
import {go} from '../../core/actions/router.actions';
import {ApiService} from '../../core/services/api.service';

import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/map';

import {AuthHelper} from '../helpers/auth.helper';



@Injectable()
export class AuthEffects {

  /**
   * Registers user
   */
  @Effect()
  register$ = this.actions$.ofType(auth.REGISTER)
    .switchMap((action: auth.RegisterAction) => this.apiService.post(action.payload.queryUrl, {...action.payload.data})
        .map(res => res.success ?
          new auth.RegistrationSuccessAction( { res : res, urlTo : action.payload.urlTo}) :
          new error.AddErrorAction(res.data)));

  /**
   * Registers user success
   */
  @Effect()
  registerSuccess$ = this.actions$.ofType(auth.REGISTRATION_SUCCESS)
    .map((action: auth.RegistrationSuccessAction) => go(action.payload.urlTo));

  /**
   * Login user
   */
  @Effect()
  login$ = this.actions$.ofType(auth.LOGIN)
    .switchMap((action: auth.LoginAction) => this.apiService.post(action.payload.queryUrl, {...action.payload.data})
      .map(res => res.success ? new auth.LoginSuccessAction({...res, returnUrl : action.payload.returnUrl}) : new error.AddErrorAction(res.data)));

  /**
   * Login user success
   */
  @Effect()
  loginSuccess$ = this.actions$.ofType(auth.LOGIN_SUCCESS)
    .do((action: auth.LoginSuccessAction) => this.authHelper.setAuthToken(action.payload.data.token))
    .map((action: auth.LoginSuccessAction) => go(action.payload.returnUrl));

  /**
   * Reset password request
   */
  @Effect()
  reset$ = this.actions$.ofType(auth.RESET_PASSWORD)
    .switchMap((action: auth.ResetPasswordAction) => this.apiService.post(action.payload.queryUrl, {...action.payload.data})
      .map(res => res.success ? new auth.ResetPasswordSuccessAction(res) : new error.AddErrorAction(res.data)));

  /**
   * Set new password
   */
  @Effect()
  setPassword$ = this.actions$.ofType(auth.SET_PASSWORD)
    .switchMap((action: auth.SetPasswordAction) => this.apiService.post(action.payload.queryUrl, {...action.payload.data})
      .map(res => res.success ? new auth.SetPasswordSuccessAction(res) : new error.AddErrorAction(res.data)));

  /**
   * Default constructor
   * @param actions$
   * @param ApiService
   * @param AuthHelper
   */
  constructor(private actions$: Actions,
              private apiService: ApiService,
              private authHelper: AuthHelper
  ) {
  }


}
