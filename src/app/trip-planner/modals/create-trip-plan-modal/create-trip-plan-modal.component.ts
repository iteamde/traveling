import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

import {State} from '../../../core/reducers/index';
import {CreateTripAction} from '../../actions/trip-planner.actions';
import {ValidationService} from '../../../core/services/validation';
import {IMyDpOptions} from 'mydatepicker';
import {getErrorFromServer} from '../../../core/reducers';

import {Store} from '@ngrx/store';
import {Observable} from 'rxjs/Observable';

@Component({
  selector: 'app-create-trip-plan-modal',
  templateUrl: 'create-trip-plan-modal.component.html',
  styleUrls: ['create-trip-plan-modal.component.scss']
})

export class CreateTripPlanModalComponent implements OnInit {
  public privacy = 1;

  /**
   * Trip planner error
   */
  public error$: Observable<string>;

  /**
   * Holds trip data
   */
  public form: FormGroup;

  public formErrors = {
    title : '',
    date : ''
  };

  public myDatePickerOptions: IMyDpOptions = {
    dateFormat: 'dd mmm yyyy'
  };

  public cityName: string;

  /**
   * Default constructor
   * @param store
   * @param fb
   */
  constructor(private store: Store<State>,
              private fb: FormBuilder,
              private route: ActivatedRoute,
              public validation: ValidationService) {}

  ngOnInit() {
    this.cityName = this.route.snapshot.queryParamMap.get('city') ?
                    this.route.snapshot.queryParamMap.get('city') : '';

    this.error$ = this.store.select(getErrorFromServer);
    this.form = this.fb.group({
      title: ['', [
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(255)
      ]],
      date: [ null, [
        Validators.required,
      ]],
      privacy: this.privacy
    });

  }

  /**
   * Next step button clicked
   */
  submit() {
    this.store.dispatch(new CreateTripAction({user_id: 1, cityName: this.cityName, ...this.form.value,  ...{date : this.form.get('date').value.jsdate}}));
  }
}
