import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TripPlannerComponent } from './trip-planner.component';
import { CreateTripPlanModalComponent } from './modals/create-trip-plan-modal/create-trip-plan-modal.component';
import { AddCityToTripModalComponent } from './modals/add-city-to-trip-modal/add-city-to-trip-modal.component';
import { AddPlaceToTripModalComponent } from './modals/add-place-to-trip-modal/add-place-to-trip-modal.component';
import {ReactiveFormsModule} from "@angular/forms";
import {TripPlannerService} from "./services/trip-planner.service";

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  declarations: [
    TripPlannerComponent,
    CreateTripPlanModalComponent,
    AddCityToTripModalComponent,
    AddPlaceToTripModalComponent
  ],
  providers: [
    TripPlannerService
  ]
})
export class TripPlannerModule { }
