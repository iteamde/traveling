import { Component, OnInit } from '@angular/core';
import {Store} from '@ngrx/store';
import {State, getUserId} from '../../../core/reducers/index';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {CreateTripAction} from '../../actions/trip-planner.actions';
import {Observable} from 'rxjs/Observable';
import {ValidationService} from '../../../core/services/validation';
import {IMyDpOptions} from 'mydatepicker';
import {getErrorFromServer} from '../../../core/reducers';
import {getCountry} from '../../../core/reducers';
import {CountryService} from '../../../country/services/country.service';


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
              public validation: ValidationService,
              private countryService: CountryService) {

  }

  ngOnInit() {

    if (this.countryService.getType() === 'cities' && this.countryService.isAddTripClicked) {
      this.store.select(getCountry).subscribe(res => {
        this.cityName = res.info.trans[0].title;
      });
    }
    else {
      this.cityName = '';
    }

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
    this.countryService.isAddTripClicked = false;
  }

}
