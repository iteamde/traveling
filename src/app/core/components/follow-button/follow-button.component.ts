import {Component, OnDestroy, OnInit} from '@angular/core';

import {getCountryId, getFollowStatus, State} from '../../reducers';
import {Store} from '@ngrx/store';
import {AutoUnsubscribe} from 'ngx-auto-unsubscribe';
import {FollowCountryAction, UnfollowCountryAction} from '../../../country/actions/country.actions';

@AutoUnsubscribe({includeArrays: true})
@Component({
  selector: 'app-follow-button',
  templateUrl: './follow-button.component.html',
  styleUrls: ['./follow-button.component.scss']
})
export class FollowButtonComponent implements OnInit, OnDestroy {
  public id: number;
  public isFollowed: boolean;
  private subscriptions;
  constructor(private store: Store<State>) {
    this.subscriptions = [
      this.store.select(getCountryId).subscribe(id => this.id = id),
      this.store.select(getFollowStatus).subscribe(status => this.isFollowed = status)
    ];
  }

  ngOnInit() {
  }

  toggleFollow() {
    console.log(this.isFollowed)
    this.isFollowed ?
      this.store.dispatch(new UnfollowCountryAction(this.id)) :
      this.store.dispatch(new FollowCountryAction(this.id));
  }

  ngOnDestroy() {

  }

}
