import {HomeComponent} from './home/home.component';
import {AuthGuard} from "../auth/guards/can-activate.guard";

export const HomeRoutes = [
  {
    path: 'home',
    component: HomeComponent,
    canActivate: [AuthGuard],
  }
];
