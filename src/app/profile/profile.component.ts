import {Component, OnDestroy, OnInit} from '@angular/core';
import {getOpenMobileSideBar, getProfileActiveTab, State} from '../core/reducers';
import {Store} from '@ngrx/store';

/**
 * Profile component
 * Holds main info about user
 */
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit, OnDestroy {

  public subscriptions$ = [];
  public currentTab = '';
  public openMobileSideBar;

  constructor(private store: Store<State>) { }

  ngOnInit() {
    this.subscriptions$[0] = this.store.select(getProfileActiveTab)
      .subscribe(res => this.currentTab = res);

    this.openMobileSideBar = this.store.select(getOpenMobileSideBar);
  }

  ngOnDestroy() {
    this.subscriptions$.forEach(item => item.unsubscribe());
  }

}
