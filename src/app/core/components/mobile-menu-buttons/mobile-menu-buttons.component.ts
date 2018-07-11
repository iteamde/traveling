import {Component, OnDestroy, OnInit} from '@angular/core';
import {Store} from '@ngrx/store';
import {State} from '../../reducers';
import { CloseMobileSideBar, OpenLeftMobileMenu, OpenMobileSideBar} from '../../actions/core.actions';
import {AutoUnsubscribe} from 'ngx-auto-unsubscribe';
import {getOpenLeftMobileMenu, getOpenMobileSideBar} from '../../reducers';



@AutoUnsubscribe({includeArrays: true})
@Component({
  selector: 'app-mobile-menu-buttons',
  templateUrl: './mobile-menu-buttons.component.html',
  styleUrls: ['./mobile-menu-buttons.component.scss']
})
export class MobileMenuButtonsComponent implements OnInit, OnDestroy {

  // array of subscriptions for unsubscribe
  public subscriptions$ = [];
  public showLeftMobileMenu: boolean;
  public showMobileSideBar: boolean;


  constructor(private store: Store<State>) {

    this.subscriptions$[0] = this.store.select(getOpenLeftMobileMenu).subscribe(res => {
      this.showLeftMobileMenu = res;
    });

    this.subscriptions$[1] = this.store.select(getOpenMobileSideBar).subscribe(res => {
      this.showMobileSideBar = res;
    });
  }

  ngOnInit() {
  }

  toggleSideMobileMenu(e) {
    e.stopPropagation();
    if (!this.showLeftMobileMenu) this.store.dispatch(new OpenLeftMobileMenu);
  }

  toggleMobileSideBar(e) {
    e.stopPropagation();
    this.showMobileSideBar ? this.store.dispatch(new CloseMobileSideBar) : this.store.dispatch(new OpenMobileSideBar);
  }

  ngOnDestroy() {
  }

}
