import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TripPlannerComponent } from './trip-planner.component';
import { CreateTripPlanModalComponent } from './modals/create-trip-plan-modal/create-trip-plan-modal.component';
import { AddCityToTripModalComponent } from './modals/add-city-to-trip-modal/add-city-to-trip-modal.component';
import { AddPlaceToTripModalComponent } from './modals/add-place-to-trip-modal/add-place-to-trip-modal.component';
import {ReactiveFormsModule} from "@angular/forms";
import {TripPlannerService} from "./services/trip-planner.service";
import {SharedModule} from '../shared/shared.module';
import {CoreModule} from '../core/core.module';
import { TripPlannerInfoComponent } from './components/trip-planner-info/trip-planner-info.component';
import {DndModule} from 'ng2-dnd';
import { AmazingTimePickerModule } from 'amazing-time-picker';
import {TripInfoResolver} from './services/trip-info-resolver';
import {ConfirmComponent} from '../core/components/modals/confirm/confirm.component';
import {AgmCoreModule} from "@agm/core";

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    SharedModule,
    CoreModule,
    DndModule.forRoot(),
    AmazingTimePickerModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyAXf0rOLWAEcQn2pAqRyZeighQ_y8NtNYY'
    })
  ],
  declarations: [
    TripPlannerComponent,
    CreateTripPlanModalComponent,
    AddCityToTripModalComponent,
    AddPlaceToTripModalComponent,
    TripPlannerInfoComponent,
  ],
  providers: [
    TripPlannerService,
    TripInfoResolver,
    CreateTripPlanModalComponent,
    AddCityToTripModalComponent,
    AddPlaceToTripModalComponent,
  ],
  entryComponents: [
    CreateTripPlanModalComponent,
    AddCityToTripModalComponent,
    AddPlaceToTripModalComponent,
    ConfirmComponent]
})
export class TripPlannerModule { }
