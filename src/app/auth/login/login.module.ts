import { NgModule } from '@angular/core';

import { LoginComponent } from './login.component';
import { SharedModule } from '../../shared/shared.module';
import { LoginModalComponent } from '../modals/login-modal/login-modal.component';



@NgModule({
  declarations: [
    LoginComponent,
  ],
  imports: [
    SharedModule,
  ],
  providers: [],
  entryComponents: [LoginModalComponent]
})
export class LoginModule {
}
