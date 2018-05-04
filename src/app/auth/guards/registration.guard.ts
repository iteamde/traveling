import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from '@angular/router';
import {Observable} from 'rxjs/Observable';
import {Store} from '@ngrx/store';
import {State} from '../../core/reducers/index';
import 'rxjs/add/operator/skipUntil';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/map';
import {getRegistationStep} from '../../core/reducers';

@Injectable()
export class RegistrationGuard implements CanActivate {
  protected registrationStep$: Observable<number>;
  private relation  = {
    '/login': 0,
    '/signup': 1,
    '/signup/step2': 2,
    '/signup/step3': 3,
    '/signup/step4': 4,
    '/signup/step5': 5,
    '/signup/done' : 6
  };

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
         if ( res  ===  this.relation[state.url]) {
           return true;
         } else {
           this.router.navigate(['/signup']);
           return false;
         }
      });
    }
}
