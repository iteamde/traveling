import {Component, OnDestroy, OnInit} from '@angular/core';
import {Store} from '@ngrx/store';
import {AutoUnsubscribe} from 'ngx-auto-unsubscribe';

import {getFollowPlacesStatus, getPlacesId, State} from '../../../core/reducers';
import {FollowPlacesAction, UnfollowPlacesAction} from '../../actions/places.actions';

@AutoUnsubscribe({includeArrays: true})
@Component({
  selector: 'app-follow-place-button',
  templateUrl: './follow-place-button.component.html',
  styleUrls: ['./follow-place-button.component.scss']
})
export class FollowPlaceButtonComponent implements OnInit, OnDestroy {
  public id: number;
  public isFollowed: boolean;
  private subscriptions;
  constructor(private store: Store<State>) {
    this.subscriptions = [
      this.store.select(getPlacesId).subscribe(id => this.id = id),
      this.store.select(getFollowPlacesStatus).subscribe(status => this.isFollowed = status)
    ];
  }

  ngOnInit() {
  }

  toggleFollow(e) {
    e.preventDefault();
    console.log('ID:', this.id);
    console.log(this.isFollowed);
    this.isFollowed ?
      this.store.dispatch(new UnfollowPlacesAction(this.id)) :
      this.store.dispatch(new FollowPlacesAction(this.id));
  }

  ngOnDestroy() {

  }

}
