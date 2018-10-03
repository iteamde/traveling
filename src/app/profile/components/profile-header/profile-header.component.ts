import {Component, OnDestroy, OnInit} from '@angular/core';

import {getProfileActiveTab, State} from '../../../core/reducers/index';
import {SetActiveTabAction} from '../../actions/profile.actions';

import {Store} from '@ngrx/store';

@Component({
  selector: 'app-profile-header',
  templateUrl: './profile-header.component.html',
  styleUrls: ['./profile-header.component.scss']
})
export class ProfileHeaderComponent implements OnInit, OnDestroy {

  public activeTab = '';
  public subscriptions$ = [];

  public socialList = [
    {socialClass: 'facebook', icon: 'fa fa-facebook'},
    {socialClass: 'twitter', icon: 'fa fa-twitter'},
    {socialClass: 'instagram', icon: 'fa fa-instagram'},
  ];

  public mockTabs = [
    {title: 'Visited', name: 'visited', count: 8},
    {title: 'Trip plans', name: 'trip-plans', count: 5},
    {title: 'Favorites', name: 'favorites', count: 27},
    {title: 'Videos', name: 'videos', count: 6},
    {title: 'Photos', name: 'photos', count: 987},
    {title: 'Reviews', name: 'reviews', count: 35},
    {title: 'Interests', name: 'interests', count: 17}
  ];

  constructor(private store: Store<State>) {
  }

  ngOnInit() {
    this.subscriptions$[0] = this.store.select(getProfileActiveTab)
      .subscribe(res => this.activeTab = res);
  }

  ngOnDestroy() {
    this.subscriptions$.forEach(item => item.unsubscribe());
  }

  setActiveTab(name) {
    this.store.dispatch(new SetActiveTabAction(name));
  }
}
