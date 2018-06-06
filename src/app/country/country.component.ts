import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {CountryService} from './services/country.service';
import {getCountry, State} from '../core/reducers';
import {Store} from '@ngrx/store';
import { SetCountryInfoAction} from './actions/country.actions';
import {AutoUnsubscribe} from 'ngx-auto-unsubscribe';
import {PlacesListComponent} from './components/places-list/places-list.component';
import {HolidaysListComponent} from './components/holidays-list/holidays-list.component';

@AutoUnsubscribe()
@Component({
  selector: 'app-country',
  templateUrl: './country.component.html',
  styleUrls: ['./country.component.scss']
})
export class CountryComponent implements OnInit, OnDestroy{
  public data;
  public countryMediaData;
  public plansMediaData;
  public placesMediaData;
  public placesList = PlacesListComponent;
  public holidaysList = HolidaysListComponent;

  constructor (private route: ActivatedRoute,
               private countryService: CountryService,
               private store: Store<State>) {
    this.store.dispatch(new SetCountryInfoAction(this.route.snapshot.data.country));
    this.store.select(getCountry).subscribe( res => {
      console.log("Country", res);
      this.data = res;
    });
    }

  ngOnInit() {

    //FILL DATA FOR  BOX GALLERY WRAPPERs
    this.countryMediaData = {
      title: 'Photos',
      routePath: 'country-media',
      count: this.data.stats.medias,
      media: this.data.media.slice(0, 3)
    };

    this.plansMediaData = {
      title: 'Trip plans',
      routePath: 'trips-media',
      count: this.data.stats.trips,
      media: this.data.plans.slice(0, 3).map(res => res.medias),
    };

    this.placesMediaData = {
      title: 'Best places',
      routePath: 'place-media',
      count: this.data.stats.places,
      media: this.data.places.filter(arr => arr.medias.length).slice(0, 3).map(res => new Object({
        url: res.medias[0] && res.medias[0].url,
        id: res.medias[0] && res.medias[0].id,
      }))
    };
  }

  ngOnDestroy(){

  }
}
