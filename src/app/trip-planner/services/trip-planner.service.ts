import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {environment} from '../../../environments/environment';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class TripPlannerService {

  /**
   * Default constructor
   * @param http
   */
  constructor(
    private http: HttpClient
  ) {}

  /**
   * Create trip plan step - 1
   * @param details
   */
  createTrip(details): Observable<any> {
    return this.http.post(environment.apiUrl + 'trips/new', details);
  }

  /**
   * Create trip plan - step 2 city search
   * @param query
   */
  getCities(query): Observable<any> {
    const details = {query, language_id: 1, page: 1, page_size: 10};
    return this.http.post(environment.apiUrl + 'cities/search', details);
  }

  /**
   * Create trip plan - step 2 submit
   * @param tripId
   * @param details
   */
  addCity(tripId, details): Observable<any> {
    return this.http.post(environment.apiUrl + `trips/${tripId}/add_city`, details)
  }

  /**
   * Create trip plan - step 3
   * @param tripId
   * @param details
   */
  addPlace(tripId, details): Observable<any> {
    return this.http.post(environment.apiUrl + `trips/${tripId}/add_place`, details)
  }

}
