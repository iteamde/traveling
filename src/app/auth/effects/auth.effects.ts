import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
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
import {SetPasswordSuccessAction} from '../actions/auth.actions';



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
       return this.ApiService.post({...action.payload.data} , action.payload.queryUrl);
    })
    .map(response => {
      if(response && response.success){
        console.log("REGISTRATION RESPONSE" , response);
        this.router.navigate([this.urlTo]);
        return new auth.RegistrationSuccessAction(response);
      } else {
        console.log("REGISTRATION RESPONSE ERROR" , response);
        return  new auth.RegistrationFailedAction(response);
      }
    });
  @Effect()
  login$ = this.actions$.ofType(auth.LOGIN)
    .switchMap((action: auth.LoginAction) => {
      this.urlTo = action.payload.urlTo;
      return this.ApiService.post({...action.payload.data} , action.payload.queryUrl);
    })
    .map(response => {
      if(response && response.success){
        console.log("LOGIN RESPONSE" , response);
        this.router.navigate([this.urlTo]);
        return new auth.LoginSuccessAction(response);
      } else {
        console.log("LOGIN RESPONSE ERROR" , response);
        return  new auth.LoginFailedAction(response);
      }
    });


  @Effect()
  reset$ = this.actions$.ofType(auth.RESET_PASSWORD)
    .switchMap((action: auth.ResetPasswordAction) => {
      return this.ApiService.post({...action.payload.data} , action.payload.queryUrl);
    })
    .map(response => {
      if(response && response.success){
        console.log("RESET RESPONSE" , response);
        return new auth.ResetPasswordSuccessAction(response);
      } else {
        console.log("RESSET RESPONSE ERROR" , response);
        return  new auth.ResetPasswordFailedAction(response);
      }
    });


  @Effect()
  setPassword$ = this.actions$.ofType(auth.SET_PASSWORD)
    .switchMap((action: auth.SetPasswordAction) => {
      return this.ApiService.post({...action.payload.data} , action.payload.queryUrl);
    })
    .map(response => {
      if(response && response.success){
        console.log("SET RESPONSE" , response);
        return new auth.SetPasswordSuccessAction(response);
      } else {
        console.log("SET RESPONSE ERROR" , response);
        return  new auth.SetPasswordErrorAction(response);
      }
    });
  /**
   * Default constructor
   * @param actions$
   * @param ApiService
   */
  constructor(private actions$: Actions,
              private ApiService: ApiService,
              private router: Router,
             ) {
  }
}
