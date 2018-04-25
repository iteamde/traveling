import { Component, OnInit } from '@angular/core';
import {ModalManager} from '../../services/modal-manager.service';
import {ActivatedRoute, Router} from '@angular/router';
import {Store} from '@ngrx/store';
import {State} from '../../reducers';

@Component({
  selector: 'app-modal-wrapper',
  templateUrl: './modal-wrapper.component.html',
  styleUrls: ['./modal-wrapper.component.scss']
})
export class ModalWrapperComponent implements OnInit {
  private component: any;
  private routeParams: any;
  private modalData: any;
  private skipClose: any;

  constructor(private modalManager: ModalManager,
              private store: Store<State>,
              private route: ActivatedRoute,
              private router: Router
  ) {
    this.component = this.route.snapshot.data.modal;

    if (this.route.snapshot.data.getFunc) {
      this.store.select(this.route.snapshot.data.getFunc).subscribe(res => this.modalData = res);
    }

    if ( this.route.snapshot.data.skipClose) {
      this.skipClose = this.route.snapshot.data.skipClose;
    }

    this.routeParams = this.route.snapshot.params;
  }

  ngOnInit() {
    this.modalManager.openModalFromLCH(this.component,
      this.modalData ? {data: this.modalData , params: this.routeParams, close: this.close.bind(this) } : this.routeParams,
      this.skipClose
     );
  }

  close() {
    this.router.navigate([ '../../' ], { relativeTo: this.route });
  }

}
