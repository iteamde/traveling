import {Component, Inject, OnDestroy, OnInit} from '@angular/core';
import {FormGroup, FormBuilder} from '@angular/forms';
import {Store} from '@ngrx/store';
import {State} from '../../../core/reducers/index';
import {AddPlaceAction} from '../../actions/trip-planner.actions';
import {Observable} from 'rxjs';
import {Subscription} from 'rxjs/Subscription';
import {TripPlannerService} from '../../services/trip-planner.service';
import {getCitiesInfo, getErrorFromServer} from '../../../core/reducers';
import {MAT_DIALOG_DATA} from '@angular/material';
import {Router} from '@angular/router';
import {AutoUnsubscribe} from 'ngx-auto-unsubscribe';


@AutoUnsubscribe()
@Component({
  selector: 'app-add-place-to-trip-modal',
  templateUrl: './add-place-to-trip-modal.component.html',
  styleUrls: ['add-place-to-trip-modal.component.scss']
})
export class AddPlaceToTripModalComponent implements OnInit, OnDestroy {

  public trip_id: number;
  public city_id: number;
  public cities: any;
  public city_index: number;
  public closeLink: string;

  public searchPlaceSubscription$: Subscription;

  public places = [];

  /**
   * Trip planner error
   */
  public error$: Observable<string>;
  public citiesInfo$: Observable<any>;

  /**
   * Holds trip data
   */
  public form: FormGroup;

  /**
   * Default constructor
   * @param store
   * @param fb
   */
  constructor(private store: Store<State>, private fb: FormBuilder,
              private tripPlannerService: TripPlannerService,
              @Inject(MAT_DIALOG_DATA) public routeParams: any,
              private route: Router) {
    this.closeLink = this.route.routerState.snapshot.url.endsWith('info') ? this.route.routerState.snapshot.url : 'trip/new';
    this.error$ = this.store.select(getErrorFromServer);
    this.citiesInfo$ = this.store.select(getCitiesInfo);
  }

  ngOnInit() {



    this.citiesInfo$.subscribe(res => {
      this.cities = res.cities;
      this.city_id = (res.activeCity && res.activeCity.id);
      res.cities.forEach((city, index) => {
        if (city.id === this.city_id) {
          this.city_index = index;
        }
      });
    });

    this.tripPlannerService.getPlaces('', this.city_id)
      .subscribe(res => this.places = res.data.places);

    this.form = this.fb.group({
      place: '',
    });

    this.searchPlaceSubscription$ = this.form.valueChanges
      .debounceTime(500)
      .switchMap(form => this.tripPlannerService.getPlaces(form.place, this.city_id))
      .subscribe(res => this.places = res.data.places);
  }

  /**
   * Add button clicked
   */
  onAddClick(place) {
    let tCity = this.cities[this.city_index];
    place.pivot = {};
    place.trans = [{title : place.name}];
    tCity.places.push(place);
    console.log("tCity", tCity);
    let helper = {item: tCity, index: this.city_index};
    this.store.dispatch(new AddPlaceAction( this.routeParams.id, {place_id : place.id}, `/trip/${this.routeParams.id}/info`, helper));
  }

  ngOnDestroy() {
  }
}
