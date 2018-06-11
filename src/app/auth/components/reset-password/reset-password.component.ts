import { Component, OnInit } from '@angular/core';
import {getErrorFromServer, getResetPasswordStatus, State} from '../../../core/reducers';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Store} from '@ngrx/store';
import {ValidationService} from '../../../core/services/validation';
import { matchPasswordValidator} from '../../../core/validators/custom-validators';
import {ClearPasswordStatus, SetPasswordAction} from '../../actions/auth.actions';
import {ActivatedRoute, Params} from '@angular/router';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.css']
})
export class ResetPasswordComponent implements OnInit {
  public userForm: FormGroup;
  public resetPasswordStatus$;
  public errorFromServer$;
  public token : string;
  public user: any = {
    password: "",
    password_confirmation: "",
  };
  public formErrors = {
    password: "",
    password_confirmation: "",
  };

  constructor(private store: Store<State>, private fb: FormBuilder , public validation: ValidationService, private route: ActivatedRoute) {
    this.route.queryParams.subscribe((params: Params) => {
      this.token = params['token'];
    });
    this.resetPasswordStatus$ = store.select(getResetPasswordStatus);
    this.errorFromServer$ = store.select(getErrorFromServer);
  }

  ngOnInit() {
    this.store.dispatch(new ClearPasswordStatus());
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
    const data = {
      token: this.token,
      newpassword: this.userForm.value.password,
      newpassword_confirmation: this.userForm.value.password_confirmation
    };
    this.store.dispatch(new SetPasswordAction({data : data, queryUrl: 'users/reset'}));
  }

}
