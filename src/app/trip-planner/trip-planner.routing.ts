import {TripPlannerComponent} from './trip-planner.component';
import {TripPlannerInfoComponent} from './components/trip-planner-info/trip-planner-info.component';

export const TripPlannerRoutes = [

  { path: 'trip', component: TripPlannerComponent },
  { path: 'trip/new', component: TripPlannerComponent },
  { path: 'trip/:id/cities', component: TripPlannerComponent },
  { path: 'trip/:id/places', component: TripPlannerComponent },
  { path: 'trip/:id/info', component: TripPlannerInfoComponent }
];
