import {CountryComponent} from './country.component';
import {CountryInfoResolver} from './services/country-info-resolver';

export const CountryRoutes = [
  {
    path: 'country/:id',
    component: CountryComponent,
    resolve: {country: CountryInfoResolver}
  }

];
