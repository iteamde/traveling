import {ModuleWithProviders} from '@angular/core';
import {RouterModule} from '@angular/router';
import {AuthRoutes} from './auth/auth.routing';
import {PrivacyPolicyComponent} from './core/components/privacy-policy/privacy-policy.component';
import {TermsOfServiceComponent} from './core/components/terms-of-service/terms-of-service.component';
import {ErrorComponent} from './core/components/error/error.component';
import {AppPreloadingStrategy} from './customPreload';


const appRoutes = [

  ...AuthRoutes,
  {
    path: 'home',
    loadChildren: './home/home.module#HomeModule'
  },
  {
    path: 'country/:id',
    loadChildren: './country/country.module#CountryModule',
    data: { preload: true, delay: true }
  },
  {
    path: 'city/:id',
    loadChildren: './country/country.module#CountryModule',
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
    path: 'profile',
    loadChildren: './profile/profile.module#ProfileModule'
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

];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes, {preloadingStrategy: AppPreloadingStrategy});
