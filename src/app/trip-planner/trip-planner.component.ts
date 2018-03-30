import { Component, OnInit } from '@angular/core';
import {CreateTripPlanModalComponent} from './modals/create-trip-plan-modal/create-trip-plan-modal.component';
import {AddCityToTripModalComponent} from './modals/add-city-to-trip-modal/add-city-to-trip-modal.component';
import {AddPlaceToTripModalComponent} from './modals/add-place-to-trip-modal/add-place-to-trip-modal.component';
import {ModalManager} from '../core/services/modal-manager.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-trip-planner',
  templateUrl: './trip-planner.component.html',
  styleUrls: ['trip-planner.component.scss']
})
export class TripPlannerComponent implements OnInit {


  constructor() {
  }

  ngOnInit() {

  }

}
