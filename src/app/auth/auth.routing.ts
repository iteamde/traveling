import { LoginRoutes } from './login/login.routing';
import { AuthComponent } from './auth.component';
import {RegisterRoutes} from './register/register.routing';


export const AuthRoutes = [
  {
    path: '',
    component: AuthComponent,
    children: [
      ...LoginRoutes,
      ...RegisterRoutes
    ]
  }
];
