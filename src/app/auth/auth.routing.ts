import { AuthComponent } from './auth.component';
import {RegistrationGuard} from './guards/registration.guard';
import {ForgotPasswordComponent} from './components/forgot-password/forgot-password.component';
import {ResetPasswordComponent} from './components/reset-password/reset-password.component';
import {AuthGuard} from './guards/can-activate.guard';


export const AuthRoutes = [
  { path: '', component: AuthComponent , canActivate: [AuthGuard]},
  { path: 'login', component: AuthComponent },
  { path: 'signup', component: AuthComponent },
  { path: 'signup/step2', component: AuthComponent , canActivate: [RegistrationGuard]},
  { path: 'signup/step3', component: AuthComponent , canActivate: [RegistrationGuard]},
  { path: 'signup/step4', component: AuthComponent , canActivate: [RegistrationGuard]},
  { path: 'signup/step5', component: AuthComponent , canActivate: [RegistrationGuard]},
  { path: 'signup/done', component: AuthComponent ,  canActivate: [RegistrationGuard]},
  { path: 'forgot-password', component: ForgotPasswordComponent },
  { path: 'reset-password', component: ResetPasswordComponent }
];
