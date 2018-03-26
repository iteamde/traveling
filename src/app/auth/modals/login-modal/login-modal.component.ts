import { Component, OnInit  } from '@angular/core';
import {Location} from '@angular/common';
import {FacebookService} from '../../services/facebook.service';
import {emailValidator} from '../../../core/validators/custom-validators';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ValidationService} from '../../../core/services/validation';
import {Observable} from 'rxjs/Observable';
import {getErrorFromServer, getLoginStatus, State} from '../../../core/reducers';
import {Store} from '@ngrx/store';
import {LoginAction} from '../../actions/auth.actions';

@Component({
  selector: 'app-login-modal',
  templateUrl: './login-modal.component.html',
  styleUrls: ['./login-modal.component.css']
})
export class LoginModalComponent implements OnInit {
  public authError$: Observable<any>;
  public loginStatus$: Observable<any>;
  public userForm: FormGroup;
  public user: any = {
    email: '',
    password: '',
  };
  public formErrors = {
    email: '',
    password: '',
  };

  constructor(
    private _location: Location,
    private store: Store<State>,
    public facebookService: FacebookService,
    private fb: FormBuilder ,
    public validation: ValidationService) {

    this.authError$ = store.select(getErrorFromServer);
    this.loginStatus$ = store.select(getLoginStatus);

  }

  ngOnInit() {
    this.buildForm();
    this.facebookService.FBLoadStatus$();
  }

  buildForm() {
    this.userForm = this.fb.group({
      email: [this.user.email, [
        Validators.required,
        emailValidator
      ]],
      password: [this.user.password, [
        Validators.required,
        Validators.minLength(6),
        Validators.maxLength(20)
      ]],

    });

    this.userForm.valueChanges
      .subscribe(() => {
        this.formErrors = this.validation.onValueChange(this.userForm, this.formErrors, false);
      });
  }

 facebookLogin() {
   this.facebookService.login()
     .then(res => this.store.dispatch(new LoginAction({data: res, urlTo: '/home', queryUrl: 'users/create/facebook'})));
 }

 login() {
   this.store.dispatch(new LoginAction({data : this.userForm.value, urlTo: '/home' , queryUrl: 'users/login'}));
 }

}
