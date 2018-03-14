import { Injectable } from '@angular/core';
import {environment} from '../../../environments/environment';
import {Observable} from 'rxjs/Observable';
import {ApiService} from '../../core/services/api.service';

@Injectable()
export class TripPlannerService {

  constructor(
    private api: ApiService
  ) {}

  /**
   * Create trip plan step - 1
   * @param details
   */
  createTrip(details): Observable<any> {
    return this.api.post( details,  'trips/new');
  }

  /**
   * Create trip plan - step 2 city search
   * @param query
   */
  getCities(query): Observable<any> {
    const details = {query, language_id: 1, page: 1, page_size: 10};
    return this.api.post(details,  'cities/search');
  }

  getPlaces(query): Observable<any> {
    const details = {query, language_id: 1, page: 1, page_size: 10};
    return this.api.post(details,  'places/search');
  }


  /**
   * Create trip plan - step 2 submit
   * @param tripId
   * @param details
   */
  addCity(tripId, details): Observable<any> {
    return this.api.post(details, `trips/${tripId}/add_city`)
  }

  /**
   * Create trip plan - step 3
   * @param tripId
   * @param details
   */
  addPlace(tripId, details): Observable<any> {
    return this.api.post(details ,  `trips/${tripId}/add_place`)
  }

}
