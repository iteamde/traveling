import { Component, OnInit } from '@angular/core';
import {Store} from '@ngrx/store';
import {State, getLoggedUser, getErrorFromServer} from '../../../core/reducers';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/take';
import {nameValidator} from '../../../core/validators/custom-validators';
import {FormBuilder, Validators} from '@angular/forms';
import {ValidationService} from '../../../core/services/validation';
import {RegisterAction, SetRegistrationStep} from '../../actions/auth.actions';
import * as range from 'lodash/range';


@Component({
  selector: 'app-register-modal-step-2',
  templateUrl: './register-modal-step-2.component.html',
  styleUrls: ['./register-modal-step-2.component.css']
})
export class RegisterModalStep2Component implements OnInit {
  public user$: Observable<any>;
  public authError$: Observable<any>;
  public ageArray = range(13, 81);
  public userForm;
  public user = {
    name: '',
    age:  '',
    gender: ''
  };
  public formErrors = {
    name: '',
    age:  '',
    gender: ''
  };

  constructor(private store: Store<State>,
              private fb: FormBuilder,
              public validation: ValidationService) {
    this.store.dispatch(new SetRegistrationStep(2));
    this.user$ = store.select(getLoggedUser);
    this.authError$ = store.select(getErrorFromServer);
  }

  ngOnInit() {
    this.buildForm();
  }


  buildForm() {
    this.userForm = this.fb.group({
      name: [this.user.name, [
        Validators.required,
        Validators.minLength(8),
        nameValidator

      ]],
      age: [this.user.age, [
        Validators.required,
      ]],
      gender: [this.user.gender, [
        Validators.required,
      ]]
    });

    this.userForm.valueChanges
      .subscribe(() => {
        this.formErrors = this.validation.onValueChange(this.userForm, this.formErrors, false);
      });
  }

  register() {
    this.user$.take(1).subscribe(user => {
      const payload = {
        data: {...this.userForm.value, ...{user_id: user && user.id} },
        queryUrl : 'users/create/step2',
        urlTo : 'signup/step3'
      };
      this.store.dispatch(new RegisterAction(payload));
    });
  }
}
