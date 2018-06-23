import {Component, OnInit} from '@angular/core';
import {Store} from '@ngrx/store';
import {getCountryPlaces, getCountryStats, State} from '../../../core/reducers';

@Component({
  selector: 'app-followers-list',
  templateUrl: './followers-list.component.html',
  styleUrls: ['./followers-list.component.scss']
})
export class FollowersListComponent implements OnInit {
  public data: any;
  public stats: any;
  constructor(private store: Store<State>) {
    // this.data = this.store.select(getCountryPlaces);
    // this.stats = this.store.select(getCountryStats);
  }

  ngOnInit() {
  }

}
