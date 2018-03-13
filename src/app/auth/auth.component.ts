import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {Store} from '@ngrx/store';
import {getAuthModalRef, getLoggedUser, State} from '../core/reducers';
import {SetRegistrationStep, OpenModalAction, RemoveModalRef} from './actions/auth.actions';
import {MatDialog} from '@angular/material';
import {routeRelations} from './helpers/relation';
import { combineLatest } from 'rxjs/observable/combineLatest';
import 'rxjs/add/operator/skipLast';



@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {
  private path = '';
  private user$: any;

  constructor( private router: Router , private store: Store<State>, private dialog: MatDialog) {
    this.path = router.url;
    this.user$ = store.select(getLoggedUser);
    router.events.subscribe( () => this.dialog.closeAll());
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
