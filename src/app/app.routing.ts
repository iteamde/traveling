import {ModuleWithProviders, NgModule} from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import {AuthRoutes} from './auth/auth.routing';


const routes: Routes = [
  { path: '', component: AppComponent},
];

const appRoutes = [
  {
    path: '',
    component: AppComponent,
    children: [
      ...AuthRoutes,

    ]
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
