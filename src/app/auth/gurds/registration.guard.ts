import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from '@angular/router';
import {Observable} from 'rxjs/Observable';
import {Store} from '@ngrx/store';
import {State} from '../../core/reducers/index';
import 'rxjs/add/operator/skipUntil';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/map';
import {getRegistationStep} from '../../core/reducers';
import {routeRelations} from '../helpers/relation';
@Injectable()
export class RegistrationGuard implements CanActivate {
  protected registrationStep$: Observable<number>;

  /**
   * Default constructor
   * @param store
   * @param router
   */
  constructor(private store: Store<State>, private router: Router) {
    this.registrationStep$ = store.select(getRegistationStep);
  }

  /**
   * Checks if user is logged in and in case he is not - redirects to login page
   * @param next
   * @param state
   * @return {Observable<T>}
   */
  canActivate(next: ActivatedRouteSnapshot,
              state: RouterStateSnapshot):  Observable<boolean> {


      return this.registrationStep$.map(res => {
        console.log("ROUTE", state.url, res);
         if ( res  === (routeRelations[state.url] && routeRelations[state.url].step)) {
           console.log("ON TRUE");
           return true;
         } else {
           this.router.navigate(['/signup']);
           return false;
         }
      });
    }
}
