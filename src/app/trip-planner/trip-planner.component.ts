import { Component, OnInit } from '@angular/core';
import {CreateTripPlanModalComponent} from "./modals/create-trip-plan-modal/create-trip-plan-modal.component";
import {AddCityToTripModalComponent} from "./modals/add-city-to-trip-modal/add-city-to-trip-modal.component";
import {AddPlaceToTripModalComponent} from "./modals/add-place-to-trip-modal/add-place-to-trip-modal.component";
import {Store} from "@ngrx/store";
import {State} from "../core/reducers/index";
import {ModalManager} from '../core/services/modal-manager.service';
import { Router, ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-trip-planner',
  templateUrl: './trip-planner.component.html',
  styleUrls: ['trip-planner.component.scss']
})
export class TripPlannerComponent implements OnInit {
  private path: string;
  private hashTable: any = {
    new : CreateTripPlanModalComponent,
    cities : AddCityToTripModalComponent,
    places : AddPlaceToTripModalComponent
  };


  constructor(private store: Store<State>, private modalManager: ModalManager, private  route: Router, private active: ActivatedRoute) {
    this.path = route.url.split('/').pop();
  }

  ngOnInit() {
    //TODO WORST WAY EVER , WILL CHANGE IT SOON
    if( Object.keys(this.hashTable).includes(this.path) ){
      this.modalManager.openModalFromLCH(this.hashTable[this.path]);
    }

  }

}
