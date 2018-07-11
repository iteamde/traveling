import {ModuleWithProviders} from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import {AuthRoutes} from './auth/auth.routing';
import {TripPlannerRoutes} from './trip-planner/trip-planner.routing';
import {HomeRoutes} from './home/home.routing';
import {PrivacyPolicyComponent} from './core/components/privacy-policy/privacy-policy.component';
import {TermsOfServiceComponent} from './core/components/terms-of-service/terms-of-service.component';
import {ErrorComponent} from './core/components/error/error.component';
import {CountryRoutes} from './country/country.routing';
import {PlacesRoutes} from './places/places.routing';


const appRoutes = [

  // it gives nested app-root don`t use AppComponent in router it is bootstrapped by default
  // {
  //   path: '',
  //   component: AppComponent,
  //   children: [
  //     ...AuthRoutes,
  //     ...TripPlannerRoutes,
  //     ...HomeRoutes,
  //     ...CountryRoutes,
  //     ...PlacesRoutes
  //   ],
  // },
  ...AuthRoutes,
  ...TripPlannerRoutes,
  ...HomeRoutes,
  ...CountryRoutes,
  ...PlacesRoutes,
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

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
