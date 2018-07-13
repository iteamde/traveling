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
import {RouterEffects} from './core/effects/router.effects';
import {HTTP_INTERCEPTORS} from '@angular/common/http';
import {JwtInterceptor} from './auth/helpers/jwt.interceptor';
import { ToastrModule } from 'ngx-toastr';
import {CountryModule} from './country/country.module';
import {CountryEffects} from './country/effects/country.effects';
import {StoreDevtoolsModule} from '@ngrx/store-devtools';


const effectsArr = [
  AuthEffects,
  RouterEffects,
  CountryEffects
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
    StoreModule.forRoot(reducers),
    EffectsModule.forRoot(effectsArr),
    StoreDevtoolsModule.instrument({
      maxAge: 10
    }),
    Ng4LoadingSpinnerModule.forRoot(),
    ToastrModule.forRoot({positionClass : 'toast-top-right'}),
    CountryModule
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
