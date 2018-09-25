import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { AuthHelper } from '../helpers/auth.helper';

/**
 *  Auth guard to check auth token
 */
@Injectable()
export class AuthGuard implements CanActivate {

  constructor(private router: Router, private authHelper: AuthHelper) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    if (this.authHelper.getAuthToken()) {
      // logged in so return true
      return true;
    }

    // not logged in so redirect to login page
    this.router.navigate(['/login'], { queryParams: { returnUrl: state.url }});
    return false;
  }
}
