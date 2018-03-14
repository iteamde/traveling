import { Component, OnInit } from '@angular/core';
import {Store} from '@ngrx/store';
import {State, getUserId, getTripPlannerError} from '../../../core/reducers/index';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {CreateTripAction} from '../../actions/trip-planner.actions';
import {Observable} from 'rxjs/Observable';

@Component({
  selector: 'app-create-trip-plan-modal',
  templateUrl: 'create-trip-plan-modal.component.html',
  styleUrls: ['create-trip-plan-modal.component.scss']
})

export class CreateTripPlanModalComponent implements OnInit {

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
      title: ['', [
        Validators.required,
        Validators.minLength(6),
        Validators.maxLength(255)
      ]],
      date: new Date(),
      privacy: 1
    })
  }

  /**
   * Next step button clicked
   */
  onNextStepClick() {
    this.store.dispatch(new CreateTripAction({user_id: 1, ...this.form.value}));
    /*this.store.select(getUserId)
      .subscribe(userId => this.store.dispatch(new CreateTripAction({userId, ...this.form.value})));*/
  }

}
