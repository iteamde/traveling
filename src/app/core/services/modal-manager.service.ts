import { Injectable } from '@angular/core';
import {MatDialog} from '@angular/material';
import {OpenModalAction} from '../actions/core.actions';
import {Store} from '@ngrx/store';
import {getOpenedModalRef, State} from '../reducers';
import 'rxjs/add/operator/take';
import 'rxjs/add/operator/skipLast';
import 'rxjs/add/operator/first';
import 'rxjs/add/operator/takeLast';
import {Router} from '@angular/router';
import {Observable} from 'rxjs/Observable';
import {RemoveErrorAction} from '../actions/error.actions';


@Injectable()
export class ModalManager {
  private modalRef$: Observable<any>;
  constructor(private dialog: MatDialog, private router: Router, private store: Store<State>) {
    router.events.subscribe(() => {
      this.store.dispatch(new RemoveErrorAction());
      return this.dialog.closeAll();
    });
    this.modalRef$ = store.select(getOpenedModalRef);
    this.modalRef$.skipLast(1).subscribe( res => {
      if ( res ) res.close();
    });
  }

  openModalFromLCH(component) {
    setTimeout(() => {
      this.store.dispatch(new OpenModalAction({ref: this.dialog.open(component)}));
    } , 1);
  }

  openModal(component) {
    this.store.dispatch(new OpenModalAction({ref: this.dialog.open(component)}));
  }

}
