import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
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
  public isCountry: boolean;


  constructor (private route: ActivatedRoute,
               private router: Router,
               private countryService: CountryService,
               private store: Store<State>) {
    /**
     * Check if this component is country or city
     */
    this.isCountry = this.countryService.getType() === 'countries';

    this.store.dispatch(new SetCountryInfoAction(this.route.snapshot.data.country));

    /**
     * Get data for component (country or city)
     */
    this.store.select(getCountry).subscribe( res => {
      console.log("Country", res);
      this.data = res;
    });
    }

  ngOnInit() {

    //FILL DATA FOR  BOX GALLERY WRAPPERs
    this.countryMediaData = {
      title: 'Photos',
      routePath: 'media',
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

  /**
   * navigate to /trip/new with params -> example: http://localhost:4200/trip/new?city=kiev
   */

  addTrip() {
    this.router.navigate(['/trip/new'], {queryParams: {city: this.data.info.trans[0].title.toLowerCase()}});

  }

}
