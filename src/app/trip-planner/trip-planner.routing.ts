import {TripPlannerComponent} from './trip-planner.component';

export const TripPlannerRoutes = [

  { path: 'trip', component: TripPlannerComponent },
  { path: 'trip/new', component: TripPlannerComponent },
  { path: 'trip/:id/cities', component: TripPlannerComponent },
  { path: 'trip/:id/places', component: TripPlannerComponent },
];
