import {Component, OnDestroy, OnInit} from '@angular/core';
import {Store} from '@ngrx/store';
import {ActivatedRoute} from '@angular/router';
import {AutoUnsubscribe} from 'ngx-auto-unsubscribe';

import {PlacesService} from './services/places.service';
import {CountryService} from '../country/services/country.service';
import {getCountry, getPlaces, State} from '../core/reducers';
import {SetCountryInfoAction} from '../country/actions/country.actions';
import {SetPlacesInfoAction} from './actions/places.actions';

import {FollowersListComponent} from './components/followers-list/followers-list.component';
import {TrendingPlacesListComponent} from './components/trending-places-list/trending-places-list.component';
import {AllowSpinnerService} from '../core/services/allowSpinner.service';

import 'rxjs/add/operator/filter';

@AutoUnsubscribe({includeArrays: true})
@Component({
  selector: 'app-places',
  templateUrl: './places.component.html',
  styleUrls: ['./places.component.scss']
})
export class PlacesComponent implements OnInit, OnDestroy {

  public data;
  public placePhotos;
  public oneDayPlans;
  public nearbyPlaces;
  public followersList = FollowersListComponent;
  public trendingList = TrendingPlacesListComponent;
  public countryData;
  public showComponent: boolean;
  // array of subscriptions for unsubscribe
  public subscriptions$ = [];
  public getCountrySubscription;

  constructor(private route: ActivatedRoute,
              private placesService: PlacesService,
              private store: Store<State>,
              private countryService: CountryService,
              private allowSpinnerService: AllowSpinnerService) {

    // :TODO Check it
    this.route.params.subscribe(params => {
      this.showComponent = false;
      // unsubscribe
      this.unSubscribe();
      this.getData();
      window.scrollTo(0, 0);
    });

  }

  ngOnInit() {

    this.getDataForPlaceCountry();

  }

  getDataForPlaceCountry() {
    // :TODO don`t forget that we use  city and  country as the same component
    // :TODO ask later to make light API for footer component of place that use country info

    this.allowSpinnerService.allowSpinner.next(false);
    // :TODO this info for footer of place component that contains country info -> make it lazyLoading, or modify API for places
    this.getCountrySubscription = this.placesService.getCountryOfPlace(this.data.info.place.countries_id).subscribe(response => {
      this.countryService.setType('countries');
      this.store.dispatch(new SetCountryInfoAction(response));
    });
  }


  getData() {
    /**
     * this.route.snapshot.data.country -> this is data from places resolver
     */
    this.store.dispatch(new SetPlacesInfoAction(this.route.snapshot.data.places));

    /**
     * Get data for component places
     */
    this.subscriptions$[0] = this.store.select(getPlaces).subscribe(res => {
      console.log('PLACES DATA:', res);
      this.data = res;
      this.init();
    });

    /**
     * Get data for footer of places and trending places of component country
     */
    this.subscriptions$[1] = this.store.select(getCountry).subscribe(res => {
      console.log('Country', res);
      this.countryData = res;
      this.showComponent = true;
    });
  }

  init() {

    // FILL DATA FOR  BOX GALLERY WRAPPERs
    this.placePhotos = {
      title: 'Photos',
      routePath: 'photos',
      //count: this.data.info.place.media_count,
      count: this.data.photo_count,
      media: this.data.media.slice(0, 3)
    };

    this.oneDayPlans = {
      title: 'One Day Plans',
      routePath: 'one-day-plans',
      count: this.data.plans.count,
      media: this.data.plans.plans.slice(0, 3).map(res => res.medias)
    };

    this.nearbyPlaces = {
      title: 'Nearby places',
      routePath: 'nearby-places',
      count: this.data.nearby.length,
      media: this.data.nearby.filter(res => Object.keys(res.firstmedia).length > 1).slice(0, 3).map(res => new Object({
        url: res.firstmedia.url,
        id: res.firstmedia.id
      }))
    };
  }

  unSubscribe() {
    if (this.subscriptions$.length) {
      this.subscriptions$.forEach(item => item.unsubscribe());
    }
  }

  ngOnDestroy() {
    this.getCountrySubscription.unsubscribe();
  }

}
