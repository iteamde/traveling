import { Injectable } from '@angular/core';
import {environment} from '../../../environments/environment';
import {Observable} from 'rxjs/Observable';
import {ApiService} from '../../core/services/api.service';
import {Router} from '@angular/router';

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
    const details = {query, language_id: 1, offset: 0, limit: 10};
    return this.api.post(details,  'cities/search');
  }

  getPlaces(query, id): Observable<any> {
    const details = {query, language_id: 1, offset: 0, limit: 10, city_id: id};
    return this.api.post(details,  'places/search');
  }

  getPlacesInfo(tripId): Observable<any> {
    return this.api.get(`trips/${tripId}/places?language_id=1`);
  }

  saveCityInfo(details, url): Observable<any> {
    return this.api.post(details, url);
  }
  savePlaceInfo(details, url): Observable<any> {
     return this.api.post(details, url);
  }
  removeCityInfo(details, url): Observable<any> {
    return this.api.post(details, url);
  }
  removePlaceInfo(details, url): Observable<any> {
    return this.api.post(details, url);
  }
  publishTrip(details, url): Observable<any> {
    return this.api.post(details, url);
  }
  cancelTrip(details, url): Observable<any> {
    return this.api.post(details, url);
  }


  /**
   * Create trip plan - step 2 submit
   * @param tripId
   * @param details
   */
  addCity(tripId, details): Observable<any> {
    return this.api.post({city_id: details.id, order: details.order}, `trips/${tripId}/add_city`);
  }

  /**
   * Create trip plan - step 3
   * @param tripId
   * @param details
   */
  addPlace(tripId, details): Observable<any> {
    return this.api.post( details,  `trips/${tripId}/add_place`);
  }

}
