import { AuthComponent } from './auth.component';


export const AuthRoutes = [
  { path: '', component: AuthComponent },
  { path: 'login', component: AuthComponent },
  { path: 'signup', component: AuthComponent },
  { path: 'signup/step2', component: AuthComponent }
];
