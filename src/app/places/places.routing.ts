import {PlacesComponent} from './places.component';
import {AuthGuard} from '../auth/guards/can-activate.guard';
import {PlacesInfoResolver} from './services/places-info-resolver';
import {GalleryModalComponent} from '../core/components/gallery-modal/gallery-modal.component';
import {ModalWrapperComponent} from '../core/components/modal-wrapper/modal-wrapper.component';
import {getPlacesNearby, getPlacesImg, getPlacesPlans} from '../core/reducers';

export const PlacesRoutes  = [
  {
    path: 'places/:id',
    component: PlacesComponent,
    resolve: {places: PlacesInfoResolver},
    // canActivate: [AuthGuard],
    children: [
      {
        path: 'photos/:mediaId',
        component: ModalWrapperComponent,
        data: {modal: GalleryModalComponent, getFunc: getPlacesImg, skipClose: true}
      },
      {
        path: 'one-day-plans/:mediaId',
        component: ModalWrapperComponent,
        data: {modal: GalleryModalComponent, getFunc: getPlacesPlans, skipClose: true}
      },
      {
        path: 'nearby-places/:mediaId',
        component: ModalWrapperComponent,
        data: {modal: GalleryModalComponent, getFunc: getPlacesNearby, skipClose: true}
      }
    ]
  }
];