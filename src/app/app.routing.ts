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


const appRoutes = [
  {
    path: '',
    component: AppComponent,
    children: [
      ...AuthRoutes,
      ...TripPlannerRoutes,
      ...HomeRoutes,
      ...CountryRoutes
    ],
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

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
