import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HTTP_INTERCEPTORS} from '@angular/common/http';
import {HttpClientModule} from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { routing } from './app.routing';
import { AuthModule } from './auth/auth.module';
import { SharedModule } from './shared/shared.module';
import {reducers} from './core/reducers';
import {AuthEffects} from './auth/effects/auth.effects';
import {ApiService} from './core/services/api.service';
import {RouterEffects} from './core/effects/router.effects';
import {JwtInterceptor} from './auth/helpers/jwt.interceptor';
import {AppPreloadingStrategy} from './customPreload';
import {AllowSpinnerService} from './core/services/allowSpinner.service';

import {StoreModule} from '@ngrx/store';
import { ToastrModule } from 'ngx-toastr';
import { Ng4LoadingSpinnerModule } from 'ng4-loading-spinner';
import {EffectsModule} from '@ngrx/effects';

const effectsArr = [
  AuthEffects,
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
    StoreModule.forRoot(reducers),
    EffectsModule.forRoot(effectsArr),
    Ng4LoadingSpinnerModule.forRoot(),
    ToastrModule.forRoot({positionClass : 'toast-top-right'}),
  ],
  providers: [
    ApiService,
    AllowSpinnerService, // don`t push it to core or share module
    AppPreloadingStrategy,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: JwtInterceptor,
      multi: true
    }
    ],
  bootstrap: [AppComponent]
})
export class AppModule { }
