import {Component, OnDestroy, OnInit} from '@angular/core';
import {ModalManager} from '../../services/modal-manager.service';
import {ActivatedRoute, NavigationStart, Router} from '@angular/router';
import {Store} from '@ngrx/store';
import {State} from '../../reducers';
import {RemoveErrorAction} from '../../actions/error.actions';
import {MatDialog} from '@angular/material';
import {of} from 'rxjs/observable/of';

@Component({
  selector: 'app-modal-wrapper',
  templateUrl: './modal-wrapper.component.html',
  styleUrls: ['./modal-wrapper.component.scss']
})
export class ModalWrapperComponent implements OnInit, OnDestroy {
  private component: any;
  private routeParams: any;
  private modalData: any;
  private skipClose: any;
  private subscription$: any;
  public routerOut;

  constructor(private modalManager: ModalManager,
              private store: Store<State>,
              private route: ActivatedRoute,
              private router: Router,
              private dialog: MatDialog) {

    this.routerOut = this.router;

    this.component = this.route.snapshot.data.modal;

    if (this.route.snapshot.data.getFunc) {
      this.store.select(this.route.snapshot.data.getFunc).subscribe(res => this.modalData = res);
    }

    if ( this.route.snapshot.data.skipClose) {
      this.skipClose = this.route.snapshot.data.skipClose;
    }

    this.routeParams = this.route.snapshot.params;


    this.subscription$ = this.router.events.filter(event => event instanceof NavigationStart)
      .switchMap(() => of(this.route.snapshot.data.skipClose)).subscribe((res) => {
      this.store.dispatch(new RemoveErrorAction());
      console.log('Router DATA', res);
      return !res && this.dialog.closeAll();
    });


  }

  ngOnInit() {
    // this.modalManager.openModalFromLCH(this.component,
    //   this.modalData ? {data: this.modalData , params: this.routeParams, close: this.close.bind(this) } : this.routeParams,
    //   this.skipClose
    //  );

    this.modalManager.openModalFromLCH(this.component,
      this.modalData ? {data: this.modalData , params: this.routeParams, close: this.close.bind(this) } : this.routeParams
     );
  }

  close() {
    this.router.navigate([ '../../' ], { relativeTo: this.route });
  }

  ngOnDestroy() {
    this.subscription$.unsubscribe();
  }

}
