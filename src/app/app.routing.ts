import {ModuleWithProviders} from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import {AuthRoutes} from './auth/auth.routing';
import {TripPlannerRoutes} from './trip-planner/trip-planner.routing';
import {HomeRoutes} from './home/home.routing';


const appRoutes = [
  {
    path: '',
    component: AppComponent,
    children: [
      ...AuthRoutes,
      ...TripPlannerRoutes,
      ...HomeRoutes
    ]
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
