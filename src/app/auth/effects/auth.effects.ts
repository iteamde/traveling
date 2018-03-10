import {Injectable} from '@angular/core';
import {Observable, ObservableInput} from 'rxjs/Observable';
import {Actions, Effect} from '@ngrx/effects';

import * as auth from '../actions/auth.actions';
import {AuthService} from '../services/auth.service';

import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/switchMapTo';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/empty';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/of';
import {Router} from '@angular/router';
import {Action, Store} from '@ngrx/store';
import {getRegistationStep, State} from '../../core/reducers';


@Injectable()
export class AuthEffects {

  /**
   * Registers user with given dataconstructor(puauth: fromAuth.reducer,blic payload) {}
   */
  @Effect()
  register$ = this.actions$.ofType(auth.REGISTER)
    .switchMap((action: auth.RegisterAction) => this.authService.register({...action.payload}))
    .map(response => {
      if(response.success){
        console.log(this.store.select(getRegistationStep));
        this.router.navigate(['signup/step2']);
        return new auth.RegistrationSuccessAction(response);
      } else {
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
  /**
   * Default constructor
   * @param actions$
   * @param authService
   */
  constructor(private actions$: Actions,
              private authService: AuthService,
              private router: Router,
              public store: Store<State>

             ) {
  }
}
