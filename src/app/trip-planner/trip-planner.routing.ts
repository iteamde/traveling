import {CreateTripPlanModalComponent} from './modals/create-trip-plan-modal/create-trip-plan-modal.component';
import {AddPlaceToTripModalComponent} from './modals/add-place-to-trip-modal/add-place-to-trip-modal.component';
import {AddCityToTripModalComponent} from './modals/add-city-to-trip-modal/add-city-to-trip-modal.component';
import {AppComponent} from "../app.component";

export const TripPlannerRoutes = [
  {
    path: 'trip',
    component: AppComponent,
    children: [
      { path: '', component: CreateTripPlanModalComponent },
      { path: ':id/cities', component: AddPlaceToTripModalComponent },
      { path: ':id/places', component: AddCityToTripModalComponent  }
    ]
  },
];
