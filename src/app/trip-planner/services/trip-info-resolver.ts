import { Injectable } from '@angular/core';
import {Resolve} from '@angular/router';
import { ActivatedRouteSnapshot } from '@angular/router';
import {TripPlannerService} from './trip-planner.service';


@Injectable()
export class TripInfoResolver implements Resolve<any> {
  constructor(private tripService: TripPlannerService ) {}

  resolve(route: ActivatedRouteSnapshot) {
    return this.tripService.getPlacesInfo(route.paramMap.get('id'));
  }
}
