import {CountryComponent} from './country.component';
import {CountryInfoResolver} from './services/country-info-resolver';
import {ModalWrapperComponent} from '../core/components/modal-wrapper/modal-wrapper.component';
import {GalleryModalComponent} from '../core/components/gallery-modal/gallery-modal.component';
import {getCountryMedia, getPlacesMedia, getTripMedia} from '../core/reducers';
import {AuthGuard} from '../auth/guards/can-activate.guard';

export const CountryRoutes = [
  {
    path: 'country/:id',
    component: CountryComponent,
    resolve: {country: CountryInfoResolver},
    canActivate: [AuthGuard],
    children: [
      {
        path: 'country-media/:mediaId',
        component: ModalWrapperComponent,
        data: {modal: GalleryModalComponent, getFunc: getCountryMedia, skipClose: true}
      },
      {
        path: 'trips-media/:mediaId',
        component: ModalWrapperComponent,
        data: {modal: GalleryModalComponent, getFunc: getTripMedia, skipClose: true}
      },
      {
        path: 'place-media/:mediaId',
        component: ModalWrapperComponent,
        data: {modal: GalleryModalComponent, getFunc: getPlacesMedia, skipClose: true}
      }
    ]
  }

];
