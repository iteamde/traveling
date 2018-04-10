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

  twitterLogin() {
    this.popupCenter('http://uat.travooo.com/api/users/create/twitter/login', 'Twitter', '900', '600');
  }

 login() {
   this.store.dispatch(new LoginAction({data : this.userForm.value, urlTo: '/home' , queryUrl: 'users/login'}));
 }


  popupCenter(url, title, w, h) {
    // Fixes dual-screen position                         Most browsers      Firefox
    const dualScreenLeft = window.screenLeft != undefined ? window.screenLeft : window.screenX;
    const dualScreenTop = window.screenTop != undefined ? window.screenTop : window.screenY;

    const width = window.innerWidth ? window.innerWidth : document.documentElement.clientWidth ? document.documentElement.clientWidth : screen.width;
    const height = window.innerHeight ? window.innerHeight : document.documentElement.clientHeight ? document.documentElement.clientHeight : screen.height;

    const left = ((width / 2) - (w / 2)) + dualScreenLeft;
    const top = ((height / 2) - (h / 2)) + dualScreenTop;
    const newWindow = window.open(url, title, 'scrollbars=yes, width=' + w + ', height=' + h + ', top=' + top + ', left=' + left);

    // Puts focus on the newWindow
    if (window.focus) {
      newWindow.focus();
    }


    newWindow.onfocus = function() {
      console.log("HEre is this", this);
    }
  }

}
