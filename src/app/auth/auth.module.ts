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
import {ScrollEventModule} from 'ngx-scroll-event';
import { SearchBoxComponent } from './helpers/search-box/search-box.component';
import { RegisterModalStep4Component } from './modals/register-modal-step-4/register-modal-step-4.component';
import { RegisterModalStep5Component } from './modals/register-modal-step-5/register-modal-step-5.component';
import { SignupDoneComponent } from './modals/signup-done/signup-done.component';
import {FacebookService} from './services/facebook.service';
import {RegistrationGuard} from './gurds/registration.guard';
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';
import { ResetPasswordComponent } from './components/reset-password/reset-password.component';

@NgModule({
  declarations: [
    AuthComponent,
    LoginModalComponent,
    RegisterModalComponent,
    RegisterModalStep2Component,
    RegisterModalStep3Component,
    SearchBoxComponent,
    RegisterModalStep4Component,
    RegisterModalStep5Component,
    SignupDoneComponent,
    ForgotPasswordComponent,
    ResetPasswordComponent
  ],
  imports: [
    ReactiveFormsModule,
    SharedModule,
    CoreModule,
    ScrollEventModule
  ],
  providers: [ValidationService, FacebookService, RegistrationGuard],
  entryComponents: [
    RegisterModalComponent,
    LoginModalComponent,
    RegisterModalStep2Component,
    RegisterModalStep3Component,
    RegisterModalStep4Component,
    RegisterModalStep5Component,
    SignupDoneComponent
  ]
})
export class AuthModule {}
