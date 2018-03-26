import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {Store} from '@ngrx/store';
import {getLoginStatus, State} from '../core/reducers';
import {LoginAction, SetRegistrationStep} from './actions/auth.actions';
import 'rxjs/add/operator/skipLast';
import 'rxjs/add/operator/takeLast';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/first';
import {ModalManager} from '../core/services/modal-manager.service';
import {routeRelations} from './helpers/relation';
import {AuthHelper} from './helpers/auth.helper';


@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {
  private path = '';
  private loginStatus = false;

  constructor( private router: Router ,
               private store: Store<State>,
               private modalManager: ModalManager,
               private authHelper: AuthHelper) {
    this.path = router.url;
    store.select(getLoginStatus).subscribe( res => this.loginStatus = res);
  }

  ngOnInit() {
    let step = 0;

    if ( (this.path === '/')) {
      console.log("HERE IS auth token", this.authHelper.getAuthToken());
      //TODO SHOULD BE SOME API FOR LOGIN WITH TOKEN FAKE DATA FOR NOW!!!
      this.store.dispatch(new LoginAction({data : {email: 'kachan.vitaliy12@gmail.com', password: '1111111'}, urlTo: '/home' , queryUrl: 'users/login'}));
      return;
    }

    if ( Object.keys(routeRelations).includes(this.path)) {
      step = routeRelations[this.path].step;
      this.modalManager.openModalFromLCH(routeRelations[this.path].component);
    }
    this.store.dispatch(new SetRegistrationStep(step));
  }
}


