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
import {HomeModule} from './home/home.module';
import {HTTP_INTERCEPTORS} from '@angular/common/http';
import {JwtInterceptor} from './auth/helpers/jwt.interceptor';

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
    HomeModule,
    SharedModule,
    EffectsModule.forRoot(effectsArr),
    StoreModule.forRoot(reducers),
    Ng4LoadingSpinnerModule.forRoot(),
    TripPlannerModule
  ],
  providers: [
    ApiService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: JwtInterceptor,
      multi: true
    }
    ],
  bootstrap: [AppComponent]
})
export class AppModule { }
