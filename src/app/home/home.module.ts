import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule} from '@angular/router';

import { HomeComponent } from './home/home.component';
import {SharedModule} from '../shared/shared.module';
import {CoreModule} from '../core/core.module';
import {HomeRoutes} from './home.routing';


@NgModule({
  imports: [
    RouterModule.forChild(HomeRoutes),
    CommonModule,
    SharedModule,
    CoreModule
  ],
  declarations: [HomeComponent]
})

export class HomeModule { }
