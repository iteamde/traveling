import {Injectable} from '@angular/core';
import {ActivatedRoute, NavigationStart, Router} from '@angular/router';
import {Observable} from 'rxjs/Observable';

import {Store} from '@ngrx/store';
import {MatDialog} from '@angular/material';

import {OpenModalAction} from '../actions/core.actions';
import {getOpenedModalRef, State} from '../reducers';
import {RemoveErrorAction} from '../actions/error.actions';


import 'rxjs/add/operator/skipLast';
import 'rxjs/add/operator/takeLast';
import 'rxjs/add/operator/filter';
import {of} from 'rxjs/observable/of';


@Injectable()
export class ModalManager {
  private modalRef$: Observable<any>;
  private skip = false;

  constructor(private dialog: MatDialog, private router: Router, private store: Store<State>, private route: ActivatedRoute) {

    // this.router.events.filter(event => event instanceof NavigationStart).switchMap(() => of(this.route.snapshot.data.skipClose)).subscribe((res) => {
    //   this.store.dispatch(new RemoveErrorAction());
    //   console.log('Router DATA', res)
    //   console.log('Skip-1', this.skip)
    //   return !this.skip && this.dialog.closeAll();
    // });

    // this.modalRef$ = store.select(getOpenedModalRef);
    // this.modalRef$.takeLast(1).subscribe( res => {
    //   console.log('Subscribe On Store getOpenedModalRef', this.skip, res);
    //   if ( res ) !this.skip && res.close();
    // });
  }

  // openModalFromLCH(component, data?, skip?) {
  //   this.skip = skip;
  //   setTimeout(() => {
  //     this.store.dispatch(new OpenModalAction({ref: this.dialog.open(component, {data})}));
  //   } , 1);
  // }

  openModalFromLCH(component, data?) {
    setTimeout(() => {
      this.store.dispatch(new OpenModalAction({ref: this.dialog.open(component, {data})}));
    } , 1);
  }


  openModal(component, data?) {
    this.store.dispatch(new OpenModalAction({ref: this.dialog.open(component,  {data})}));
  }


}
