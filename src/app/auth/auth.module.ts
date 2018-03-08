import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { AuthComponent } from './auth.component';
import { LoginModule } from './login/login.module';
import { SharedModule } from '../shared/shared.module';
import { LoginModalComponent } from './modals/login-modal/login-modal.component';
import {RegisterModule} from './register/register.module';


@NgModule({
  declarations: [ AuthComponent, LoginModalComponent ],
  imports: [
    ReactiveFormsModule,
    LoginModule,
    RegisterModule,
    SharedModule
  ]
})
export class AuthModule {}
