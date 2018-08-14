import {ProfileComponent} from './profile.component';
import {AuthGuard} from '../auth/guards/can-activate.guard';

export const ProfileRoutes = [
  {
    path: '',
    component: ProfileComponent,
    // canActivate: [AuthGuard]
  }
]
