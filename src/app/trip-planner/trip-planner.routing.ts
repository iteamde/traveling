import {TripPlannerComponent} from './trip-planner.component';
import {TripPlannerInfoComponent} from './components/trip-planner-info/trip-planner-info.component';
import {TripInfoResolver} from './services/trip-info-resolver';
import {CreateTripPlanModalComponent} from './modals/create-trip-plan-modal/create-trip-plan-modal.component';
import {AddCityToTripModalComponent} from './modals/add-city-to-trip-modal/add-city-to-trip-modal.component';
import {AddPlaceToTripModalComponent} from './modals/add-place-to-trip-modal/add-place-to-trip-modal.component';
import {AuthGuard} from '../auth/guards/can-activate.guard';
import {ModalWrapperComponent} from '../core/components/modal-wrapper/modal-wrapper.component';

export const TripPlannerRoutes = [

  {
    path: '',
    component: TripPlannerComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: 'new',
        component: ModalWrapperComponent,
        data: {modal: CreateTripPlanModalComponent}
      },
      {
        path: ':id/cities',
        component: ModalWrapperComponent,
        data: {modal: AddCityToTripModalComponent}
      },
      {
        path: ':id/places',
        component: ModalWrapperComponent,
        data: {modal: AddPlaceToTripModalComponent}
      },
      {
        path: ':id/info',
        component: TripPlannerInfoComponent,
        resolve: {placesInfo: TripInfoResolver}
      }
    ],

  }
];
