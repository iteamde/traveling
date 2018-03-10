import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { AuthComponent } from './auth.component';
import { SharedModule } from '../shared/shared.module';
import { LoginModalComponent } from './modals/login-modal/login-modal.component';
import { RegisterModalComponent } from './modals/register-modal/register-modal.component';
import { RegisterModalStep2Component } from './modals/register-modal-step-2/register-modal-step-2.component';
import {CoreModule} from '../core/core.module';
import {ValidationService} from '../core/services/validation';

@NgModule({
  declarations: [ AuthComponent, LoginModalComponent, RegisterModalComponent, RegisterModalStep2Component ],
  imports: [
    ReactiveFormsModule,
    SharedModule,
    CoreModule
  ],
  providers: [ValidationService],
  entryComponents: [RegisterModalComponent, LoginModalComponent, RegisterModalStep2Component]
})
export class AuthModule {}
