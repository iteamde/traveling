import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute, NavigationStart, Router} from '@angular/router';
import {CountryService} from './services/country.service';
import {getCountry, State} from '../core/reducers';
import {Store} from '@ngrx/store';
import {SetCountryInfoAction} from './actions/country.actions';
import {AutoUnsubscribe} from 'ngx-auto-unsubscribe';
import {PlacesListComponent} from './components/places-list/places-list.component';
import {HolidaysListComponent} from './components/holidays-list/holidays-list.component';
import {ConvertService} from '../core/services/convert.service';

import 'rxjs/add/operator/pairwise';
import 'rxjs/add/operator/skip';

@AutoUnsubscribe()
@Component({
  selector: 'app-country',
  templateUrl: './country.component.html',
  styleUrls: ['./country.component.scss']
})
export class CountryComponent implements OnInit, OnDestroy {


  public data;
  public countryMediaData;
  public plansMediaData;
  public placesMediaData;
  public placesList = PlacesListComponent;
  public holidaysList = HolidaysListComponent;
  public isCountry: boolean;

  public etiquette;
  public restrictions;
  public planningTips;
  public healthNotes;
  public showComponent = false;
  public params;
  public activeTab = 0;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private convertService: ConvertService,
              private countryService: CountryService,
              private store: Store<State>) {

    this.getData();
    this.init();
    console.log('constructor COUNTRY')

  }


  ngOnInit() {

    // console.log(this.route)
    // this.params = this.router.events.take(1).subscribe(
    //   (res: NavigationStart) => {
    //     if (/^\/country\/\d+$/i.test(res.url)) this.showComponent = false;
    //     // TODO: check bug when constructor doesn't execute while change country -> city by routerLink
    //     //this.getData();
    //     // this.init();
    //   }
    // );

  }


getData() {

  /**
   * Check if this component is country or city
   */
  this.isCountry = this.countryService.getType() === 'countries';

  /**
   * this.route.snapshot.data.country -> this is data from country resolver
   */
  this.store.dispatch(new SetCountryInfoAction(this.route.snapshot.data.country));

  /**
   * Get data for component (country or city)
   */
  this.store.select(getCountry).subscribe(res => {
    console.log("Country", res);
    this.data = res;
    this.showComponent = true;
  });
}


init() {

  /**
   * Convert strings that are returned by API into objects
   */
  this.etiquette = this.convertService.convertSwitch(this.data.info.trans[0].etiquette, '\r\n\r\n');
  this.restrictions = this.convertService.convertSwitch(this.data.info.trans[0].restrictions, '\r\n\r\n');
  this.planningTips = this.convertService.convertSwitch(this.data.info.trans[0].planning_tips, '\r\n\r\n');
  this.healthNotes = this.convertService.convertSwitch(this.data.info.trans[0].health_notes, '\r\n\r\n');


  // FILL DATA FOR  BOX GALLERY WRAPPERs
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


ngOnDestroy() {
  //this.params.unsubscribe();

}


setCurrentTab(num) {
  this.activeTab = num;
}


checkDataType(data) {
  return Object.keys(data).length > 1;
}

/**
 * navigate to /trip/new with params -> example: http://localhost:4200/trip/new?city=kiev
 */

addTrip() {
  this.router.navigate(['/trip/new'], {queryParams: {city: this.data.info.trans[0].title.toLowerCase()}});

}

}
