import {Component, OnInit, OnDestroy} from '@angular/core';
import {Store} from '@ngrx/store';
import {State, getTripId, getErrorFromServer} from '../../../core/reducers/index';
import {FormBuilder, FormGroup} from '@angular/forms';
import {AddCityAction} from '../../actions/trip-planner.actions';
import {Subscription} from 'rxjs/Subscription';
import {TripPlannerService} from '../../services/trip-planner.service';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/debounceTime';



@Component({
  selector: 'app-add-city-to-trip-modal',
  templateUrl: 'add-city-to-trip-modal.component.html',
  styleUrls: ['add-city-to-trip-modal.component.scss']
})
export class AddCityToTripModalComponent implements OnInit, OnDestroy {
  public trip_id: number;

  /**
   * Trip planner error
   */
  public error$: Observable<string>;

  /**
   * Cities data holder
   */
  public cities = [];

  /**
   * Subscription
   */
  private searchCitySubscription$: Subscription;
  /**
   * Holds city name
   */
  public cityForm: FormGroup;

  /**
   * Default constructor
   * @param store
   * @param fb
   * @param tripPlannerService
   */
  constructor(private store: Store<State>,
              private fb: FormBuilder,
              private tripPlannerService: TripPlannerService)
  {
    this.error$ = store.select(getErrorFromServer);
    this.store.select(getTripId).take(1)
      .subscribe(tripId =>  {
        this.trip_id = tripId || 171;
        console.log(this.trip_id);
      });
  }

  ngOnInit() {

    this.cityForm = this.fb.group({
      city: ''
    });

    this.searchCitySubscription$ = this.cityForm.valueChanges
      .debounceTime(500)
      .switchMap(form => this.tripPlannerService.getCities(form.city))
      .subscribe(res => this.cities = JSON.parse(res.data));
  }

  /**
   * Next step button clicked
   */
  onAddClick(id) {
    this.store.select(getTripId)
      .subscribe(tripId =>
        this.store.dispatch(new AddCityAction(tripId || this.trip_id, {city_id : id, order : 1}, `/trip/${this.trip_id}/places` )));
  }

  ngOnDestroy() {
    this.searchCitySubscription$.unsubscribe();
  }

}
