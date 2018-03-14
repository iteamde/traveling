import { Component, OnInit } from '@angular/core';
import {FormGroup, FormBuilder} from '@angular/forms';
import {Store} from '@ngrx/store';
import {State, getTripId, getTripPlannerError} from '../../../core/reducers/index';
import {AddPlaceAction} from '../../actions/trip-planner.actions';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-add-place-to-trip-modal',
  templateUrl: './add-place-to-trip-modal.component.html',
  styleUrls: ['add-place-to-trip-modal.component.scss']
})
export class AddPlaceToTripModalComponent implements OnInit {

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
  constructor(private store: Store<State>, private fb: FormBuilder) { }

  ngOnInit() {
    this.error$ = this.store.select(getTripPlannerError);
    this.form = this.fb.group({
      title: '',
      date: new Date()
    })
  }

  /**
   * Add button clicked
   */
  onAddClick() {
    this.store.select(getTripId)
      .subscribe(tripId => this.store.dispatch(new AddPlaceAction(tripId, this.form.value)));
  }
}
