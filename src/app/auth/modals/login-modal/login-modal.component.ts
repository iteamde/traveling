import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute} from '@angular/router';

import {FacebookService} from '../../services/facebook.service';
import {emailValidator} from '../../../core/validators/custom-validators';
import {ValidationService} from '../../../core/services/validation';
import {getErrorFromServer, getLoginStatus, State} from '../../../core/reducers';
import {LoginAction, SetRegistrationStep} from '../../actions/auth.actions';
import {ApiService} from '../../../core/services/api.service';

import {Store} from '@ngrx/store';
import {Observable} from 'rxjs/Observable';

/**
 * Login modal component
 */
@Component({
  selector: 'app-login-modal',
  templateUrl: './login-modal.component.html',
  styleUrls: ['./login-modal.component.css']
})
export class LoginModalComponent implements OnInit {
  public authError$: Observable<any>;
  public loginStatus$: Observable<any>;
  public userForm: FormGroup;
  private returnUrl: string;
  public user: any = {
    email: '',
    password: '',
  };
  public formErrors = {
    email: '',
    password: '',
  };

  constructor(
    private route: ActivatedRoute,
    private store: Store<State>,
    public facebookService: FacebookService,
    public api: ApiService,
    private fb: FormBuilder,
    public validation: ValidationService) {

    this.store.dispatch(new SetRegistrationStep(0));
    this.authError$ = store.select(getErrorFromServer);
    this.loginStatus$ = store.select(getLoginStatus);
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/home';
  }

  ngOnInit() {
    this.buildForm();
    this.facebookService.FBLoadStatus$().subscribe(res => console.log(res));
  }

  /**
   * Build reactive form
   */
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

    /**
     * Get form errors
     */
    this.userForm.valueChanges
      .subscribe(() => {
        this.formErrors = this.validation.onValueChange(this.userForm, this.formErrors, false);
      });
  }

  /**
   * Facebook login
   */
  facebookLogin() {
    this.facebookService.login()
      .then(res => this.store.dispatch(new LoginAction({data: res, queryUrl: 'users/create/facebook'})));
  }
  /**
   * Twitter login
   */
  twitterLogin() {
    this.popupCenter('http://uat.travooo.com/api/users/create/twitter/login', 'Twitter', '900', '600');
  }

  /**
   * User login
   */
  login() {
    this.store.dispatch(new LoginAction({data: this.userForm.value, queryUrl: 'users/login', returnUrl : this.returnUrl}));
  }

  /**
   * Set new popup window
   * @param url
   * @param title
   * @param w
   * @param h
   */
  popupCenter(url, title, w, h) {
    // Fixes dual-screen position Most browsers Firefox
    const dualScreenLeft = window.screenLeft !== undefined ? window.screenLeft : window.screenX;
    const dualScreenTop = window.screenTop !== undefined ? window.screenTop : window.screenY;

    const width = window.innerWidth ? window.innerWidth : document.documentElement.clientWidth ? document.documentElement.clientWidth : screen.width;
    const height = window.innerHeight ? window.innerHeight : document.documentElement.clientHeight ? document.documentElement.clientHeight : screen.height;

    const left = ((width / 2) - (w / 2)) + dualScreenLeft;
    const top = ((height / 2) - (h / 2)) + dualScreenTop;
    const newWindow = window.open(url, title, 'scrollbars=yes, width=' + w + ', height=' + h + ', top=' + top + ', left=' + left);

    // Puts focus on the newWindow
    if (window.focus) {
      newWindow.focus();
    }
    newWindow.onfocus = function () {
      console.log('HEre is this', this);
    };
  }

}
