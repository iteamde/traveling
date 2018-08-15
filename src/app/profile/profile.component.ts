import {Component, OnDestroy, OnInit} from '@angular/core';
import {getProfile, getProfileActiveTab, State} from '../core/reducers';
import {Store} from '@ngrx/store';
import {SetActiveTabAction} from './actions/profile.actions';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit, OnDestroy {

  public subscriptions$ = [];
  public currentTab = '';

  constructor(private store: Store<State>) { }



  ngOnInit() {
    this.subscriptions$[0] = this.store.select(getProfileActiveTab)
      .subscribe(res => this.currentTab = res);
  }

  ngOnDestroy() {
    this.subscriptions$.forEach(item => item.unsubscribe());
  }

}
