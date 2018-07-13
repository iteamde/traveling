import {ModuleWithProviders} from '@angular/core';
import { RouterModule } from '@angular/router';
import {AuthRoutes} from './auth/auth.routing';
import {PrivacyPolicyComponent} from './core/components/privacy-policy/privacy-policy.component';
import {TermsOfServiceComponent} from './core/components/terms-of-service/terms-of-service.component';
import {ErrorComponent} from './core/components/error/error.component';
import {CountryRoutes} from './country/country.routing';


const appRoutes = [

  ...AuthRoutes,
  ...CountryRoutes,
  {
    path: 'home',
    loadChildren: './home/home.module#HomeModule'
  },
  {
    path: 'places/:id',
    loadChildren: './places/places.module#PlacesModule'
  },
  {
    path: 'trip',
    loadChildren: './trip-planner/trip-planner.module#TripPlannerModule'
  },
  {
    path: 'privacy-policy',
    component: PrivacyPolicyComponent
  },
  {
    path: 'terms-of-service',
    component: TermsOfServiceComponent
  },
  {
    path: 'error',
    component: ErrorComponent
  },
  {
    path: '**',
    redirectTo: '/'
  }

]

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
