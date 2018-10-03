import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { AuthComponent } from './auth.component';
import { SharedModule } from '../shared/shared.module';
import { LoginModalComponent } from './modals/login-modal/login-modal.component';
import { RegisterModalComponent } from './modals/register-modal/register-modal.component';
import { RegisterModalStep2Component } from './modals/register-modal-step-2/register-modal-step-2.component';
import {CoreModule} from '../core/core.module';
import {ValidationService} from '../core/services/validation';
import { RegisterModalStep3Component } from './modals/register-modal-step-3/register-modal-step-3.component';
import { SearchBoxComponent } from './helpers/search-box/search-box.component';
import { RegisterModalStep4Component } from './modals/register-modal-step-4/register-modal-step-4.component';
import { RegisterModalStep5Component } from './modals/register-modal-step-5/register-modal-step-5.component';
import { SignupDoneComponent } from './modals/signup-done/signup-done.component';
import {FacebookService} from './services/facebook.service';
import {RegistrationGuard} from './guards/registration.guard';
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';
import { ResetPasswordComponent } from './components/reset-password/reset-password.component';
import {AuthGuard} from './guards/can-activate.guard';
import {AuthHelper} from './helpers/auth.helper';

import {ScrollEventModule} from 'ngx-scroll-event';

@NgModule({
  declarations: [
    RegisterModalStep2Component,
    RegisterModalStep3Component,
    RegisterModalStep4Component,
    RegisterModalStep5Component,
    ForgotPasswordComponent,
    RegisterModalComponent,
    ResetPasswordComponent,
    LoginModalComponent,
    SignupDoneComponent,
    SearchBoxComponent,
    AuthComponent
  ],
  imports: [
    ReactiveFormsModule,
    ScrollEventModule,
    SharedModule,
    CoreModule
  ],
  providers: [
    ValidationService,
    RegistrationGuard,
    FacebookService,
    AuthGuard,
    AuthHelper
  ],
  entryComponents: [
    RegisterModalStep2Component,
    RegisterModalStep3Component,
    RegisterModalStep4Component,
    RegisterModalStep5Component,
    RegisterModalComponent,
    LoginModalComponent,
    SignupDoneComponent
  ]
})
export class AuthModule {}
