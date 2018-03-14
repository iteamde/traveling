import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { routing } from './app.routing';
import { AuthModule } from './auth/auth.module';
import { SharedModule } from './shared/shared.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {StoreModule} from '@ngrx/store';
import {reducers} from './core/reducers';

import {AuthEffects} from './auth/effects/auth.effects';
import {EffectsModule} from '@ngrx/effects';
import {ApiService} from './core/services/api.service';
import {HttpClientModule} from '@angular/common/http';
import { Ng4LoadingSpinnerModule } from 'ng4-loading-spinner';
import {TripPlannerModule} from './trip-planner/trip-planner.module';
import {TripPlannerEffects} from './trip-planner/effects/trip-planner.effects';
import {RouterEffects} from './core/effects/router.effects';

const effectsArr = [
  AuthEffects,
  TripPlannerEffects,
  RouterEffects
];

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    routing,
    AuthModule,
    SharedModule,
    EffectsModule.forRoot(effectsArr),
    StoreModule.forRoot(reducers),
    Ng4LoadingSpinnerModule.forRoot(),
    TripPlannerModule
  ],
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
