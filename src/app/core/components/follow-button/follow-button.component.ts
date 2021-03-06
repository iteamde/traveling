import {Component} from '@angular/core';

import {FollowCountryAction, UnfollowCountryAction} from '../../../country/actions/country.actions';
import {getCountryId, getFollowStatus, State} from '../../reducers';

import {Store} from '@ngrx/store';
import {AutoUnsubscribe} from 'ngx-auto-unsubscribe';

/**
 * Follow button component
 * Allow user to follow favorite country, city or place
 */
@AutoUnsubscribe({includeArrays: true})
@Component({
  selector: 'app-follow-button',
  templateUrl: './follow-button.component.html',
  styleUrls: ['./follow-button.component.scss']
})
export class FollowButtonComponent {
  public id: number;
  public isFollowed: boolean;
  private subscriptions;
  constructor(private store: Store<State>) {
    this.subscriptions = [
      this.store.select(getCountryId).subscribe(id => this.id = id),
      this.store.select(getFollowStatus).subscribe(status => this.isFollowed = status)
    ];
  }

  /**
   * Follow or unfollow  action
   */
  toggleFollow() {
    this.isFollowed ?
      this.store.dispatch(new UnfollowCountryAction(this.id)) :
      this.store.dispatch(new FollowCountryAction(this.id));
  }
}
