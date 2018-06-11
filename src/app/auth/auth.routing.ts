import {AuthComponent} from './auth.component';
import {RegistrationGuard} from './guards/registration.guard';
import {ForgotPasswordComponent} from './components/forgot-password/forgot-password.component';
import {ResetPasswordComponent} from './components/reset-password/reset-password.component';
import {ModalWrapperComponent} from '../core/components/modal-wrapper/modal-wrapper.component';
import {LoginModalComponent} from './modals/login-modal/login-modal.component';
import {RegisterModalComponent} from './modals/register-modal/register-modal.component';
import {RegisterModalStep2Component} from './modals/register-modal-step-2/register-modal-step-2.component';
import {RegisterModalStep3Component} from './modals/register-modal-step-3/register-modal-step-3.component';
import {RegisterModalStep4Component} from './modals/register-modal-step-4/register-modal-step-4.component';
import {RegisterModalStep5Component} from './modals/register-modal-step-5/register-modal-step-5.component';
import {SignupDoneComponent} from './modals/signup-done/signup-done.component';


export const AuthRoutes = [
    {
      path: '',
      component: AuthComponent,
      children:
        [
          {
            path: 'login',
            component: ModalWrapperComponent,
            data: {modal: LoginModalComponent}
          },
          {
            path: 'signup',
            component: ModalWrapperComponent,
            data: {modal: RegisterModalComponent}
          },
          {
            path: 'signup/step2',
            component: ModalWrapperComponent,
            data: {modal: RegisterModalStep2Component},
            canActivate: [RegistrationGuard]
          },
          {
            path: 'signup/step3',
            component: ModalWrapperComponent,
            data: {modal: RegisterModalStep3Component},
            // canActivate: [RegistrationGuard]
          },
          {
            path: 'signup/step4',
            component: ModalWrapperComponent,
            data: {modal: RegisterModalStep4Component},
            canActivate: [RegistrationGuard]
          },
          {
            path: 'signup/step5',
            component: ModalWrapperComponent,
            data: {modal: RegisterModalStep5Component},
            canActivate: [RegistrationGuard]
          },
          {
            path: 'signup/done',
            component: ModalWrapperComponent,
            data: {modal: SignupDoneComponent},
            canActivate: [RegistrationGuard]
          },
        ],
    },
    {
      path: 'forgot-password',
      component: ForgotPasswordComponent
    },
    {
      path: 'reset-password',
      component: ResetPasswordComponent
    }
  ]
;
