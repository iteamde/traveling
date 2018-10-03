import {Injectable} from '@angular/core';
import {Router, UrlTree} from '@angular/router';
import {Location} from '@angular/common';

import {Effect, Actions} from '@ngrx/effects';
import * as RouterActions from '../actions/router.actions';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/map';

@Injectable()
export class RouterEffects {

  /**
   * Navigates to given path
   */
  @Effect({dispatch: false})
  navigate$ = this.actions$.ofType(RouterActions.GO)
    .map((action: RouterActions.GoAction) => action.payload)
    .do(({path, query: queryParams, extras}) => this.router.navigate(path, {queryParams, ...extras}));

  /**
   * Navigates back
   */
  @Effect({dispatch: false})
  navigateBack$ = this.actions$.ofType(RouterActions.BACK)
    .do(() => this.location.back());

  /**
   * Navigates forward
   */
  @Effect({dispatch: false})
  navigateForward$ = this.actions$.ofType(RouterActions.FORWARD)
    .do(() => this.location.forward());

  /**
   * Replaces search query
   */
  @Effect({dispatch: false})
  navigateSearch$ = this.actions$.ofType(RouterActions.SEARCH)
    .do((action: RouterActions.SearchAction) => {
      const urlTree: UrlTree = this.router.parseUrl(this.router.url);
      urlTree.queryParams = action.payload;
      this.router.navigateByUrl(urlTree);
    });

  /**
   * Default constructor
   * @param actions$
   * @param router
   * @param location
   */
  constructor(private actions$: Actions,
              private router: Router,
              private location: Location) {
  }
}
