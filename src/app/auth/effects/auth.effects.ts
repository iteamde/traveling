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



@Injectable()
export class AuthEffects {
   private urlTo:string;
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

  /**
   * Registers user with given dataconstructor(puauth: fromAuth.reducer,blic payload) {}
   */
  @Effect()
  openModal$ = this.actions$.ofType(auth.OPEN_MODAL)
    .switchMap((action: auth.OpenModalAction) => {
      return  Observable.of({type: 'REGISTRATION111_FAILED'});
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
        return new auth.LoginSuccessAction(response);
      } else {
        console.log("RESSET RESPONSE ERROR" , response);
        return  new auth.LoginFailedAction(response);
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
