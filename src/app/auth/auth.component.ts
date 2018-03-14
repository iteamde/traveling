import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {Store} from '@ngrx/store';
import { State} from '../core/reducers';
import {SetRegistrationStep} from './actions/auth.actions';
import 'rxjs/add/operator/skipLast';
import 'rxjs/add/operator/takeLast';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/first';
import {ModalManager} from '../core/services/modal-manager.service';
import {routeRelations} from './helpers/relation';


@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {
  private path = '';

  constructor( private router: Router , private store: Store<State>, private modalManager: ModalManager) {
    this.path = router.url;
  }

  ngOnInit() {

    let step = 0;
    if ( Object.keys(routeRelations).includes(this.path)) {
      step = routeRelations[this.path].step;
      this.modalManager.openModalFromLCH(routeRelations[this.path].component);
    }
    this.store.dispatch(new SetRegistrationStep(step));
  }
}


