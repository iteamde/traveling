import { Injectable } from '@angular/core';
import {MatDialog} from '@angular/material';
import {OpenModalAction} from '../actions/core.actions';
import {Store} from '@ngrx/store';
import {getOpenedModalRef, State} from '../reducers';
import 'rxjs/add/operator/take';
import 'rxjs/add/operator/skipLast';
import 'rxjs/add/operator/first';
import 'rxjs/add/operator/takeLast';
import {ActivatedRoute, NavigationStart, Router} from '@angular/router';
import {Observable} from 'rxjs/Observable';
import {RemoveErrorAction} from '../actions/error.actions';


@Injectable()
export class ModalManager {
  private modalRef$: Observable<any>;
  private skip = false;
  constructor(private dialog: MatDialog, private router: Router, private store: Store<State>) {
    router.events.filter(event => event instanceof NavigationStart).subscribe((res) => {
      console.log("rOUTER SUBSCRIPTION HERE", res);
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
