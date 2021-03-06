import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TripPlannerComponent } from './trip-planner.component';
import { CreateTripPlanModalComponent } from './modals/create-trip-plan-modal/create-trip-plan-modal.component';
import { AddCityToTripModalComponent } from './modals/add-city-to-trip-modal/add-city-to-trip-modal.component';
import { AddPlaceToTripModalComponent } from './modals/add-place-to-trip-modal/add-place-to-trip-modal.component';
import {ReactiveFormsModule} from '@angular/forms';
import {TripPlannerService} from './services/trip-planner.service';
import {SharedModule} from '../shared/shared.module';
import {CoreModule} from '../core/core.module';
import { TripPlannerInfoComponent } from './components/trip-planner-info/trip-planner-info.component';
import {DndModule} from 'ng2-dnd';
import { AmazingTimePickerModule } from 'amazing-time-picker';
import {TripInfoResolver} from './services/trip-info-resolver';
import {ConfirmComponent} from '../core/components/modals/confirm/confirm.component';
import { AgmDirectionModule } from 'agm-direction';
import { CityArriveBoxComponent } from './components/city-arrive-box/city-arrive-box.component';
import { PlaceDetailsBoxComponent } from './components/place-details-box/place-details-box.component';
import { CompletedPlaceBoxComponent } from './components/completed-place-box/completed-place-box.component';
import { TripPlannerMapComponent } from './components/trip-planner-map/trip-planner-map.component';
import {RouterModule} from '@angular/router';
import {TripPlannerRoutes} from './trip-planner.routing';
import {EffectsModule} from '@ngrx/effects';
import {TripPlannerEffects} from './effects/trip-planner.effects';
import {CountryService} from '../country/services/country.service';



@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    SharedModule,
    CoreModule,
    DndModule.forRoot(),
    AmazingTimePickerModule,
    AgmDirectionModule,
    RouterModule.forChild(TripPlannerRoutes),
    EffectsModule.forFeature([TripPlannerEffects])
  ],
  declarations: [
    TripPlannerComponent,
    CreateTripPlanModalComponent,
    AddCityToTripModalComponent,
    AddPlaceToTripModalComponent,
    TripPlannerInfoComponent,
    CityArriveBoxComponent,
    PlaceDetailsBoxComponent,
    CompletedPlaceBoxComponent,
    TripPlannerMapComponent,
  ],
  providers: [
    TripPlannerService,
    CountryService,
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
