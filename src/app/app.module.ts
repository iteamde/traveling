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
import {AuthService} from './auth/services/auth.service';
import {HttpClientModule} from '@angular/common/http';



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
    EffectsModule.forRoot([AuthEffects]),
    StoreModule.forRoot(reducers)
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
