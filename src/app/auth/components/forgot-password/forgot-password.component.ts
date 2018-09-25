import {Component, OnDestroy, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

import {Store} from '@ngrx/store';

import {getErrorFromServer, getResetPasswordStatus, State} from '../../../core/reducers';
import {ValidationService} from '../../../core/services/validation';
import {emailValidator} from '../../../core/validators/custom-validators';
import {ClearPasswordStatus, ResetPasswordAction} from '../../actions/auth.actions';

/**
 * Component to get a password if it is forgotten
 */
@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent implements OnInit, OnDestroy {
  public resetPasswordStatus$: any;
  public errorFromServer$: any;
  public userForm: FormGroup;
  public user: any = {
    email: '',
  };
  public formErrors = {
    email: '',
  };
  public subscriptions$ = [];

  constructor(private store: Store<State>, private fb: FormBuilder, public validation: ValidationService) {
    this.resetPasswordStatus$ = store.select(getResetPasswordStatus);
    this.errorFromServer$ = store.select(getErrorFromServer);
  }

  ngOnInit() {
    this.store.dispatch(new ClearPasswordStatus());
    this.buildForm();
  }

  /**
   * Build reactive form
   */
  buildForm() {
    this.userForm = this.fb.group({
      email: [this.user.email, [
        Validators.required,
        emailValidator
      ]]
    });

    this.subscriptions$[0] = this.userForm.valueChanges
      .subscribe(() => {
        this.formErrors = this.validation.onValueChange(this.userForm, this.formErrors, false);
      });
  }

  /**
   * Call reset password action
   */
  reset() {
    this.store.dispatch(new ResetPasswordAction({data: this.userForm.value, queryUrl: 'users/forgot'}));
  }

  ngOnDestroy() {
    /** unsubscribe of all subscriptions */
    this.subscriptions$.forEach(item => item.unsubscribe);
  }
}
