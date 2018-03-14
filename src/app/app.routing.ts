import {ModuleWithProviders} from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import {AuthRoutes} from './auth/auth.routing';
import {TripPlannerRoutes} from './trip-planner/trip-planner.routing';


const routes: Routes = [
  { path: '', component: AppComponent},
];

const appRoutes = [
  {
    path: '',
    component: AppComponent,
    children: [
      ...AuthRoutes,
      ...TripPlannerRoutes
    ]
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
