import {Component, OnDestroy, OnInit} from '@angular/core';
import {NavigationStart, Router} from '@angular/router';

import {State} from '../../reducers';
import {AutoUnsubscribe} from 'ngx-auto-unsubscribe';
import {getOpenLeftMobileMenu, getOpenMobileSideBar} from '../../reducers';
import {CloseLeftMobileMenu, CloseMobileSideBar, OpenLeftMobileMenu, OpenMobileSideBar} from '../../actions/core.actions';

import {Store} from '@ngrx/store';
import 'rxjs/add/operator/filter';

/**
 * Mobile menu buttons
 */
@AutoUnsubscribe({includeArrays: true})
@Component({
  selector: 'app-mobile-menu-buttons',
  templateUrl: './mobile-menu-buttons.component.html',
  styleUrls: ['./mobile-menu-buttons.component.scss']
})
export class MobileMenuButtonsComponent implements OnInit, OnDestroy {

  // array of subscriptions to unsubscribe
  public subscriptions$ = [];
  public showLeftMobileMenu: boolean;
  public showMobileSideBar: boolean;

  constructor(private store: Store<State>, private router: Router) {

    this.subscriptions$[0] = this.store.select(getOpenLeftMobileMenu).subscribe(res => {
      this.showLeftMobileMenu = res;
    });

    this.subscriptions$[1] = this.store.select(getOpenMobileSideBar).subscribe(res => {
      this.showMobileSideBar = res;
    });
  }

  ngOnInit() {
    // if navigate to another route -> close both mobile sidebar and menu
    this.subscriptions$[2] = this.router.events
      .filter(event => event instanceof NavigationStart)
      .subscribe(res => this.closeAllMenus());
  }

  /**
   * Show or hide mobile menu
   * @param e event
   */
  toggleSideMobileMenu(e) {
    e.stopPropagation();
    if (!this.showLeftMobileMenu) {
      this.store.dispatch(new CloseMobileSideBar);
      this.store.dispatch(new OpenLeftMobileMenu);
    }
  }

  /**
   * Show or hide mobile sidebar
   * @param e
   */
  toggleMobileSideBar(e) {
    e.stopPropagation();
    if (this.showMobileSideBar) {
      this.store.dispatch(new CloseMobileSideBar);
    } else {
      this.store.dispatch(new CloseLeftMobileMenu);
      this.store.dispatch(new OpenMobileSideBar);
    }
  }

  /**
   * Hide both mobile sidebar and menu
   */
  closeAllMenus() {
    this.store.dispatch(new CloseLeftMobileMenu);
    this.store.dispatch(new CloseMobileSideBar);
  }

  ngOnDestroy() {
    // unsubscribe of all subscriptions
    this.subscriptions$.forEach(item => item.unsubscribe());
  }

}
