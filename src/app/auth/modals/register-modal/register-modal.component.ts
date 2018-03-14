import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import {RegisterAction} from '../../actions/auth.actions';
import {Store} from '@ngrx/store';
import {getAuthError, State} from '../../../core/reducers';
import {emailValidator, matchPasswordValidator, nameValidator} from '../../../core/validators/custom-validators';
import {ValidationService} from '../../../core/services/validation';
import {Observable} from 'rxjs/Observable';
import {ModalManager} from '../../../core/services/modal-manager.service';
import {LoginModalComponent} from '../login-modal/login-modal.component';


@Component({
  selector: 'app-register-modal',
  templateUrl: './register-modal.component.html',
  styleUrls: ['./register-modal.component.css']
})
export class RegisterModalComponent implements OnInit {
  public authError$: Observable<any>;
  public userForm: FormGroup;
  public user: any = {
    username: "",
    email: "",
    password: "",
    password_confirmation: "",
  };
  public formErrors = {
    username: "",
    email: "",
    password: "",
    password_confirmation: "",
  };

  constructor( private store: Store<State>,
               private fb: FormBuilder ,
               public validation: ValidationService,
               private modalManager: ModalManager) {
    this.authError$ = store.select(getAuthError);
  }

  ngOnInit() {
    this.buildForm();
  }

  buildForm() {
    this.userForm = this.fb.group({
      username: [this.user.username, [
        Validators.required,
        nameValidator

      ]],
      email: [this.user.email, [
        Validators.required,
        emailValidator
      ]],
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



  register() {
    this.store.dispatch(new RegisterAction({
      data: {...this.userForm.value},
      queryUrl : 'users/create',
      urlTo : 'signup/step2'
    }));
  }

  open() {
    this.modalManager.openModal(LoginModalComponent);
  }
}
