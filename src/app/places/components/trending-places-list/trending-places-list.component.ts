import {Component, OnInit} from '@angular/core';
import {Store} from '@ngrx/store';
import {getCountryPlaces, getCountryStats, State} from '../../../core/reducers';

@Component({
  selector: 'app-trending-places-list',
  templateUrl: './trending-places-list.component.html',
  styleUrls: ['./trending-places-list.component.scss']
})
export class TrendingPlacesListComponent implements OnInit {
  public data: any;
  public stats: any;
  constructor(private store: Store<State>) {
    // this.data = this.store.select(getCountryPlaces);
    // this.stats = this.store.select(getCountryStats);
  }

  ngOnInit() {
  }

}
