import {Component, OnInit} from '@angular/core';
import {Store} from '@ngrx/store';
import { getCountryTrendingPlaces, State} from '../../../core/reducers';
import {Router} from '@angular/router';

/**
 * Trending places component
 * Shows most trending places of country of current place
 */
@Component({
  selector: 'app-trending-places-list',
  templateUrl: './trending-places-list.component.html',
  styleUrls: ['./trending-places-list.component.scss']
})
export class TrendingPlacesListComponent implements OnInit {
  public data: any;
  public stats: any;
  constructor(private store: Store<State>, private router: Router) {
    this.data = this.store.select(getCountryTrendingPlaces);
    // this.stats = this.store.select(getCountryStats);
  }

  ngOnInit() {
  }

  /**
   * Navigate to selected place
   * @param id
   */
  navigateToPlace(id) {
    if (id) {
      this.router.navigate(['/places/', id]);
    }

  }
}
