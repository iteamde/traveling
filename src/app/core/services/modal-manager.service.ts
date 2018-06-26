import { Injectable } from '@angular/core';
import { NavigationStart, Router} from '@angular/router';
import {Observable} from 'rxjs/Observable';

import {Store} from '@ngrx/store';
import {MatDialog} from '@angular/material';

import {OpenModalAction} from '../actions/core.actions';
import {getOpenedModalRef, State} from '../reducers';
import {RemoveErrorAction} from '../actions/error.actions';


import 'rxjs/add/operator/skipLast';
import 'rxjs/add/operator/filter';


@Injectable()
export class ModalManager {
  private modalRef$: Observable<any>;
  private skip = false;
  constructor(private dialog: MatDialog, private router: Router, private store: Store<State>) {
    router.events.filter(event => event instanceof NavigationStart).subscribe((res) => {
      this.store.dispatch(new RemoveErrorAction());
      return !this.skip && this.dialog.closeAll();
    });
    this.modalRef$ = store.select(getOpenedModalRef);
    this.modalRef$.skipLast(1).subscribe( res => {
      if ( res ) res.close();
    });
  }

  openModalFromLCH(component, data?, skip?) {
    this.skip = skip;
    setTimeout(() => {
      this.store.dispatch(new OpenModalAction({ref: this.dialog.open(component, {data})}));
    } , 1);
  }

  openModal(component, data?) {
    this.store.dispatch(new OpenModalAction({ref: this.dialog.open(component,  {data})}));
  }

}
