import { Component, OnInit } from '@angular/core';
import {CreateTripPlanModalComponent} from "./modals/create-trip-plan-modal/create-trip-plan-modal.component";
import {AddCityToTripModalComponent} from "./modals/add-city-to-trip-modal/add-city-to-trip-modal.component";
import {AddPlaceToTripModalComponent} from "./modals/add-place-to-trip-modal/add-place-to-trip-modal.component";
import {MatDialog} from "@angular/material";
import {Store} from "@ngrx/store";
import {State} from "../core/reducers/index";

@Component({
  selector: 'app-trip-planner',
  templateUrl: './trip-planner.component.html',
  styleUrls: ['trip-planner.component.scss']
})
export class TripPlannerComponent implements OnInit {
  private str: string;
  private hashTable: any = {
    createTrip : CreateTripPlanModalComponent,
    addCity : AddCityToTripModalComponent,
    addPlace : AddPlaceToTripModalComponent
  };


  constructor(private store: Store<State>, private dialog: MatDialog) {
  }

  ngOnInit() {
  }

  openModal(hash){
      this.dialog.open(this.hashTable[hash], {id: hash});
  }

}
