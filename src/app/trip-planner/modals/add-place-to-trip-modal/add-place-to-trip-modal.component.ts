import {Component, OnDestroy, OnInit} from '@angular/core';
import {FormGroup, FormBuilder} from '@angular/forms';
import {Store} from '@ngrx/store';
import {State, getTripId, getTripPlannerError} from '../../../core/reducers/index';
import {AddPlaceAction} from '../../actions/trip-planner.actions';
import {Observable} from 'rxjs';
import {Subscription} from 'rxjs/Subscription';
import {TripPlannerService} from '../../services/trip-planner.service';

@Component({
  selector: 'app-add-place-to-trip-modal',
  templateUrl: './add-place-to-trip-modal.component.html',
  styleUrls: ['add-place-to-trip-modal.component.scss']
})
export class AddPlaceToTripModalComponent implements OnInit, OnDestroy {

  public trip_id: number;

  public searchPlaceSubscription$: Subscription;

  public places = [];

  /**
   * Trip planner error
   */
  public error$: Observable<string>;

  /**
   * Holds trip data
   */
  public form: FormGroup;

  /**
   * Default constructor
   * @param store
   * @param fb
   */
  constructor(private store: Store<State>, private fb: FormBuilder, private tripPlannerService: TripPlannerService) {
    this.store.select(getTripId).take(1)
      .subscribe(tripId =>  {
        this.trip_id = tripId || 171;
        console.log(this.trip_id);
      });
  }

  ngOnInit() {
    this.error$ = this.store.select(getTripPlannerError);
    this.form = this.fb.group({
      place: '',
    });

    this.searchPlaceSubscription$ = this.form.valueChanges
      .debounceTime(500)
      .switchMap(form => this.tripPlannerService.getPlaces(form.city))
      .subscribe(res => this.places = res.data);
  }

  /**
   * Add button clicked
   */
  onAddClick(id) {
    this.store.select(getTripId)
      .subscribe(tripId => this.store.dispatch(new AddPlaceAction(tripId || this.trip_id, {place_id : id})));
  }

  ngOnDestroy() {
    this.searchPlaceSubscription$.unsubscribe();
  }
}
