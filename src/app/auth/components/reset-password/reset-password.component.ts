import { Component, OnInit } from '@angular/core';
import {State} from '../../../core/reducers';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Store} from '@ngrx/store';
import {ValidationService} from '../../../core/services/validation';
import {emailValidator, matchPasswordValidator, nameValidator} from '../../../core/validators/custom-validators';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.css']
})
export class ResetPasswordComponent implements OnInit {
  public userForm: FormGroup;
  public user: any = {
    password: "",
    password_confirmation: "",
  };
  public formErrors = {
    password: "",
    password_confirmation: "",
  };

  constructor(private store: Store<State>, private fb: FormBuilder , public validation: ValidationService) { }

  ngOnInit() {
    this.buildForm();
  }

  buildForm() {
    this.userForm = this.fb.group({
      password: [this.user.password, [
        Validators.required,
        Validators.minLength(6),
        Validators.maxLength(20)
      ]],
      password_confirmation: [this.user.password_confirmation, [
        Validators.required
      ]]
    }, {validator: matchPasswordValidator});

    this.userForm.valueChanges
      .subscribe(() => {
        this.formErrors = this.validation.onValueChange(this.userForm, this.formErrors, false);
      });
  }

  reset() {
    console.log("RESET CALL");
  }

}
