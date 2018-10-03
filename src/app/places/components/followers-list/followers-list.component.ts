import {Component} from '@angular/core';

import {getPlaceFollowers, State} from '../../../core/reducers';

import {Store} from '@ngrx/store';

/**
 * Followers list
 * Show users that follow current place
 */
@Component({
  selector: 'app-followers-list',
  templateUrl: './followers-list.component.html',
  styleUrls: ['./followers-list.component.scss']
})
export class FollowersListComponent {
  public data: any;
  public stats: any;

  constructor(private store: Store<State>) {
    this.data = this.store.select(getPlaceFollowers);
    // this.stats = this.store.select(getCountryStats);
  }

}
