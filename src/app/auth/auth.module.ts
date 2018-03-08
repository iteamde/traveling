import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { AuthComponent } from './auth.component';
import { SharedModule } from '../shared/shared.module';
import { LoginModalComponent } from './modals/login-modal/login-modal.component';
import { RegisterModalComponent } from './modals/register-modal/register-modal.component';
import { RegisterModalStep2Component } from './modals/register-modal-step-2/register-modal-step-2.component';

RegisterModalComponent
@NgModule({
  declarations: [ AuthComponent, LoginModalComponent, RegisterModalComponent, RegisterModalStep2Component ],
  imports: [
    ReactiveFormsModule,
    SharedModule
  ],
  entryComponents: [RegisterModalComponent, LoginModalComponent, RegisterModalStep2Component]
})
export class AuthModule {}
