import {LoginModalComponent} from '../modals/login-modal/login-modal.component';
import {RegisterModalComponent} from '../modals/register-modal/register-modal.component';
import {RegisterModalStep5Component} from '../modals/register-modal-step-5/register-modal-step-5.component';
import {RegisterModalStep3Component} from '../modals/register-modal-step-3/register-modal-step-3.component';
import {RegisterModalStep2Component} from '../modals/register-modal-step-2/register-modal-step-2.component';
import {SignupDoneComponent} from '../modals/signup-done/signup-done.component';
import {RegisterModalStep4Component} from '../modals/register-modal-step-4/register-modal-step-4.component';


export const routeRelations = {
  '/login': {
    component: LoginModalComponent,
    step : 0
  },
  '/signup': {
    component: RegisterModalComponent,
    step : 1
  },
  '/signup/step2': {
    component: RegisterModalStep2Component,
    step : 2
  },
  '/signup/step3': {
    component: RegisterModalStep3Component,
    step : 3
  },
  '/signup/step4': {
    component: RegisterModalStep4Component,
    step : 4
  },
  '/signup/step5': {
    component: RegisterModalStep5Component,
    step : 5
  },
  '/signup/done': {
    component: SignupDoneComponent,
    step : 6
  },
};


