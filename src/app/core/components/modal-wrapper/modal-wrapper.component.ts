import { Component, OnInit } from '@angular/core';
import {ModalManager} from '../../services/modal-manager.service';
import {ActivatedRoute, ActivatedRouteSnapshot} from '@angular/router';

@Component({
  selector: 'app-modal-wrapper',
  templateUrl: './modal-wrapper.component.html',
  styleUrls: ['./modal-wrapper.component.scss']
})
export class ModalWrapperComponent implements OnInit {
  private component: any;
  private routeParams: any;

  constructor(private modalManager: ModalManager, private route: ActivatedRoute) {
    this.component = this.route.snapshot.data;
    this.routeParams = this.route.snapshot.params;
  }

  ngOnInit() {
      this.modalManager.openModalFromLCH(this.component.modal, this.routeParams );
  }

}
