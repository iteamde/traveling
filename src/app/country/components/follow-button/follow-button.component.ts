import {Component, OnDestroy, OnInit} from '@angular/core';
import {FollowCountryAction} from '../../actions/country.actions';
import {getCountryId, State} from '../../../core/reducers';
import {Store} from '@ngrx/store';
import {AutoUnsubscribe} from 'ngx-auto-unsubscribe';

@AutoUnsubscribe()
@Component({
  selector: 'app-follow-button',
  templateUrl: './follow-button.component.html',
  styleUrls: ['./follow-button.component.scss']
})
export class FollowButtonComponent implements OnInit, OnDestroy {
  public id: number;
  constructor(private store: Store<State>) {
    this.store.select(getCountryId).subscribe(id => this.id = id);
  }

  ngOnInit() {
  }

  followCountry() {
   this.store.dispatch(new FollowCountryAction(this.id));
  }

  ngOnDestroy() {

  }

}
