import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {Store} from '@ngrx/store';
import { getLoggedUser, State} from '../core/reducers';
import {SetRegistrationStep, OpenModalAction} from './actions/auth.actions';
import {MatDialog} from '@angular/material';
import {routeRelations} from './helpers/relation';
import 'rxjs/add/operator/skipLast';
import 'rxjs/add/operator/takeLast';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/first';


@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {
  private path = '';

  constructor( private router: Router , private store: Store<State>, private dialog: MatDialog) {
    this.path = router.url;
  }

  ngOnInit() {
    this.openModal();
  }

  openModal() {
     setTimeout(() => {
        let step = 0;

        if ( Object.keys(routeRelations).includes(this.path)) {
          step = routeRelations[this.path].step;
          this.store.dispatch(new OpenModalAction({ref: this.dialog.open(routeRelations[this.path].component)}));
        }
       this.store.dispatch(new SetRegistrationStep(step));
    } , 1);
  }
}
