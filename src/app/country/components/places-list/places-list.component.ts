import {Component, OnDestroy, OnInit} from '@angular/core';
import {Router} from '@angular/router';

import {getCountryPlaces, getCountryStats, getPlacesMedia, State} from '../../../core/reducers';

import {Store} from '@ngrx/store';

/**
 * Places list component
 * Show several images of places of current country, holds places count
 */
@Component({
  selector: 'app-places-list',
  templateUrl: './places-list.component.html',
  styleUrls: ['./places-list.component.scss']
})
export class PlacesListComponent implements OnInit, OnDestroy {
  public data: any;
  public stats: any;
  public subscriptions$ = [];
  public placeMediaId: string;


  constructor(private store: Store<State>,
              private router: Router) {
    this.data = this.store.select(getCountryPlaces);
    this.stats = this.store.select(getCountryStats);
    this.subscriptions$[0] = this.store.select(getPlacesMedia).subscribe(res => this.placeMediaId = res[0].id);
  }

  ngOnInit() {

  }

  /**
   * Navigate to selected place
   * @param id
   */
  navigateToPlace(id) {
    if(id) this.router.navigate(['/places/', id]);

  }

  /**
   * Open modal image gallery
   * @param e event
   */
  openGallery(e) {
    e.preventDefault();
    if (this.placeMediaId) {
      this.router.navigate([`${this.router.url}/place-media/${this.placeMediaId}`]);
    }
  }

  ngOnDestroy() {
    this.unSubscribe();
  }

  /**
   * Unsubscribe of all subscriptions
   */
  unSubscribe() {
    if (this.subscriptions$.length) {
      this.subscriptions$.forEach(item => item.unsubscribe());
    }
  }
}
