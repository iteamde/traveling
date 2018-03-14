import {ModuleWithProviders} from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import {AuthRoutes} from './auth/auth.routing';
import {TripPlannerRoutes} from './trip-planner/trip-planner.routing';
import {HomeRoutes} from './home/home.routing';
import {PrivacyPolicyComponent} from './core/components/privacy-policy/privacy-policy.component';
import {TermsOfServiceComponent} from './core/components/terms-of-service/terms-of-service.component';


const appRoutes = [
  {
    path: '',
    component: AppComponent,
    children: [
      ...AuthRoutes,
      ...TripPlannerRoutes,
      ...HomeRoutes
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
    path: '**',
    redirectTo: '/'
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
