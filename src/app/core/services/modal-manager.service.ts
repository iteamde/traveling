import {Injectable} from '@angular/core';
import {NavigationStart, Router} from '@angular/router';
import {MatDialog} from '@angular/material';

import {OpenModalAction} from '../actions/core.actions';
import {getOpenedModalRef, State} from '../reducers';
import {GalleryModalComponent} from '../components/gallery-modal/gallery-modal.component';

import {Store} from '@ngrx/store';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/skipLast';
import 'rxjs/add/operator/takeLast';
import 'rxjs/add/operator/filter';

/**
 * Modal manager service
 */
@Injectable()
export class ModalManager {
  private modalRef$: Observable<any>;
  private closeSimpleModals = false;

  constructor(private dialog: MatDialog,
              private router: Router,
              private store: Store<State>) {

    /** Close all modals on router change if it is not instance of GalleryModalComponent */
    this.modalRef$ = store.select(getOpenedModalRef);
    this.modalRef$.subscribe( res => {
      if (res) this.closeSimpleModals =  res.componentInstance instanceof GalleryModalComponent ?  false  : true
    });

    this.router.events.filter(event => event instanceof NavigationStart).subscribe((res) => {
      return res && this.closeSimpleModals && this.dialog.closeAll();
    });
  }

  /**
   * Open component in modal from life cycle hook (LCH)
   * @param component
   * @param data
   */
  openModalFromLCH(component, data?) {
    setTimeout(() => {
      this.store.dispatch(new OpenModalAction({ref: this.dialog.open(component, {data})}));
    } , 1);
  }


  /**
   * Open component in modal
   * @param component
   * @param data
   */
  openModal(component, data?) {
    this.store.dispatch(new OpenModalAction({ref: this.dialog.open(component,  {data})}));
  }

  /**
   * Close all modals
   */
  closeAll() {
    this.dialog.closeAll();
  }


}
