import { Component, OnInit } from '@angular/core';
import {getErrorFromServer, getResetPasswordStatus, State} from '../../../core/reducers';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Store} from '@ngrx/store';
import {ValidationService} from '../../../core/services/validation';
import {emailValidator} from '../../../core/validators/custom-validators';
import {ClearPasswordStatus, ResetPasswordAction} from '../../actions/auth.actions';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent implements OnInit {
  public resetPasswordStatus$: any;
  public errorFromServer$: any;
  public userForm: FormGroup;
  public user: any = {
    email: '',
  };
  public formErrors = {
    email: '',
  };
  constructor(private store: Store<State>, private fb: FormBuilder, public validation: ValidationService) {
    this.resetPasswordStatus$ = store.select(getResetPasswordStatus);
    this.errorFromServer$ = store.select(getErrorFromServer);
  }

  ngOnInit() {
    this.store.dispatch(new ClearPasswordStatus());
    this.buildForm();
  }

  buildForm() {
    this.userForm = this.fb.group({
      email: [this.user.email, [
        Validators.required,
        emailValidator
      ]]
    });

    this.userForm.valueChanges
      .subscribe(() => {
        this.formErrors = this.validation.onValueChange(this.userForm, this.formErrors, false);
      });
  }

  reset() {
    this.store.dispatch(new ResetPasswordAction({data : this.userForm.value, queryUrl: 'users/forgot'}));
  }
}
