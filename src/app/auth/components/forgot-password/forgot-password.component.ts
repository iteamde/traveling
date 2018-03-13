import { Component, OnInit } from '@angular/core';
import {getAuthModalRef, getResetPasswordStatus, State} from '../../../core/reducers';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Store} from '@ngrx/store';
import {ValidationService} from '../../../core/services/validation';
import {emailValidator, nameValidator} from '../../../core/validators/custom-validators';
import {LoginAction, RemoveModalRef, ResetPasswordAction} from '../../actions/auth.actions';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent implements OnInit {
  public resetPasswordStatus$:any;
  public userForm: FormGroup;
  public isInit: boolean ;
  public user: any = {
    email: "",
  };
  public formErrors = {
    email: "",
  };
  constructor(private store: Store<State>, private fb: FormBuilder, public validation: ValidationService) {
    this.resetPasswordStatus$ = store.select(getResetPasswordStatus);
  }

  ngOnInit() {
    this.isInit = true;
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
    console.log("Called");
    this.store.dispatch(new ResetPasswordAction({data : this.userForm.value, queryUrl: 'users/forgot'}));
  }
}
