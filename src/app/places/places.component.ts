import { Component, OnInit } from '@angular/core';
import {Store} from '@ngrx/store';
import {ActivatedRoute} from '@angular/router';
import {PlacesService} from './services/places.service';
import {getCountry, getPlaces, State} from '../core/reducers';

import {SetPlacesInfoAction} from './actions/places.actions';
import {FollowersListComponent} from './components/followers-list/followers-list.component';
import {TrendingPlacesListComponent} from './components/trending-places-list/trending-places-list.component';
import {SetCountryInfoAction} from '../country/actions/country.actions';
import {CountryService} from '../country/services/country.service';



@Component({
  selector: 'app-places',
  templateUrl: './places.component.html',
  styleUrls: ['./places.component.scss']
})
export class PlacesComponent implements OnInit {


  public data;

  public placePhotos;
  public oneDayPlans;
  public nearbyPlaces;
  public followersList = FollowersListComponent;
  public trendingList = TrendingPlacesListComponent;
  public countryData;

  constructor(private route: ActivatedRoute,
              private placesService: PlacesService,
              private store: Store<State>,
              private countryService: CountryService) {

    /**
     * this.route.snapshot.data.country -> this is data from country resolver
     */
    this.store.dispatch(new SetPlacesInfoAction(this.route.snapshot.data.places));

    /**
     * Get data for component (country or city)
     */
    this.store.select(getPlaces).subscribe(res => {
      console.log('PLACES DATA:', res);
      this.data = res;

      this.placesService.getCountryOfPlace(this.data.info.place.countries_id).take(1).subscribe(response => {
        console.log(this.store)
        this.countryService.setType('countries');
        this.store.dispatch(new SetCountryInfoAction(response));
      });
    });

    /**
     * Get data for component country
     */
    this.store.select(getCountry).subscribe(res => {
      console.log("Country", res);
      this.countryData = res;

    });

  }

  ngOnInit() {

    console.log('PLACES COMPONENT');


    // FILL DATA FOR  BOX GALLERY WRAPPERs
    this.placePhotos = {
      title: 'Photos',
      routePath: 'photos',
      count: this.data.info.place.media_count,
      media: this.data.media.slice(0, 3)
    };

    this.oneDayPlans = {
      title: 'One Day Plans',
      routePath: 'one-day-plans',
      count: this.data.plans.count,
      media: this.data.plans.plans.slice(0, 3).map(res => res.medias),
    };

    this.nearbyPlaces = {
      title: 'Nearby places',
      routePath: 'nearby-places',
      count: this.data.nearby.length,
      media: this.data.nearby.filter(res => Object.keys(res.firstmedia).length >1).slice(0, 3).map(res => new Object({
         url: res.firstmedia.url,
         id: res.firstmedia.id
      }))
    };

console.log( this.nearbyPlaces.media)
  }

}
