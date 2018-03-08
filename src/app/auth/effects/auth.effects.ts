import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {Actions, Effect} from '@ngrx/effects';

import * as auth from '../actions/auth.actions';
import {AuthService} from '../services/auth.service';

import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/switchMapTo';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/empty';
import 'rxjs/add/observable/of';
import {Router} from '@angular/router';


@Injectable()
export class AuthEffects {

  /**
   * Registers user with given dataconstructor(puauth: fromAuth.reducer,blic payload) {}
   */
  @Effect()
  register$ = this.actions$.ofType(auth.REGISTER)
    .switchMap((action: auth.RegisterAction) => this.authService.register({...action.payload}))
    // If successful, dispatch success action with result
    .switchMap((res) => {
      console.log("SignUP 1" , res);
      this.router.navigate(['/signup/step2']);
      return Observable.of({ type: 'FIRST_STEP_SUCCESS' } )})

    // If request fails, dispatch failed action
    .catch(() => Observable.of({ type: 'REGISTRATION_FAILED' }));



  /**
   * Default constructor
   * @param actions$
   * @param authService
   */
  constructor(private actions$: Actions,
              private authService: AuthService,
              private router: Router
             ) {
  }
}
