import {Component, OnDestroy, OnInit} from '@angular/core';
import {FollowCountryAction} from '../../actions/country.actions';
import {getCountryId, getFollowStatus, State} from '../../../core/reducers';
import {Store} from '@ngrx/store';
import {AutoUnsubscribe} from 'ngx-auto-unsubscribe';

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

  followCountry() {
   this.store.dispatch(new FollowCountryAction(this.id));
  }

  ngOnDestroy() {

  }

}
