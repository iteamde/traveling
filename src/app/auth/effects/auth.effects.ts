import {Injectable} from '@angular/core';
import {Actions, Effect} from '@ngrx/effects';

import * as auth from '../actions/auth.actions';
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
   private urlTo: string;
  /**
   * Registers user with given dataconstructor(puauth: fromAuth.reducer,blic payload) {}
   */
  @Effect()
  register$ = this.actions$.ofType(auth.REGISTER)
    .switchMap((action: auth.RegisterAction) => {
       this.urlTo = action.payload.urlTo;
       return this.apiService.post({...action.payload.data} , action.payload.queryUrl);
    })
    .map( res => this.responseHandler(res, this.urlTo, auth.RegistrationSuccessAction , auth.RegistrationFailedAction) ) ;

  @Effect()
  login$ = this.actions$.ofType(auth.LOGIN)
    .switchMap((action: auth.LoginAction) => {
      this.urlTo = action.payload.urlTo;
      return this.apiService.post({...action.payload.data} , action.payload.queryUrl);
    })
    .map( res => this.responseHandler(res, this.urlTo, auth.LoginSuccessAction , auth.LoginFailedAction) ) ;

  @Effect()
  loginSuccess$ = this.actions$.ofType(auth.LOGIN_SUCCESS)
  .map((action: auth.LoginAction) => {
    this.authHelper.setAuthToken(action.payload.data.token);
    return new auth.EmptyAction();
  } );

  @Effect()
  reset$ = this.actions$.ofType(auth.RESET_PASSWORD)
    .switchMap((action: auth.ResetPasswordAction) => {
      return this.apiService.post({...action.payload.data} , action.payload.queryUrl);
    })
    .map( res => this.responseHandler(res, this.urlTo, auth.ResetPasswordSuccessAction , auth.ResetPasswordFailedAction) ) ;


  @Effect()
  setPassword$ = this.actions$.ofType(auth.SET_PASSWORD)
    .switchMap((action: auth.SetPasswordAction) => {
      return this.apiService.post({...action.payload.data} , action.payload.queryUrl);
    })
    .map( res => this.responseHandler(res, this.urlTo, auth.SetPasswordSuccessAction , auth.SetPasswordErrorAction) ) ;

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

  responseHandler(res, urlTo,  suc , error) {
    if (res && res.success) {
      console.log("SUCCES RESPONSE" , res);
      this.router.navigate([urlTo]);
      return new suc(res);
    } else {
      console.log("ERROR RESPONSE" , res);
      return new error(res);
    }
  }
}
