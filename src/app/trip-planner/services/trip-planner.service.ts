import { Injectable } from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {ApiService} from '../../core/services/api.service';

@Injectable()
export class TripPlannerService {

  constructor(private api: ApiService
  ) {}

  /**
   * Create trip plan step - 1
   * @param details
   */
  createTrip(details): Observable<any> {
    return this.api.post( 'trips/new', details);
  }

  /**
   * Create trip plan - step 2 city search
   * @param query
   */
  getCities(query): Observable<any> {
    const details = {query, language_id: 1, offset: 0, limit: 10};
    return this.api.post('cities/search', details);
  }

  getPlaces(query, id): Observable<any> {
    const details = {query, language_id: 1, offset: 0, limit: 10, city_id: id};
    return this.api.post('places/search', details);
  }

  getPlacesInfo(tripId): Observable<any> {
    return this.api.get(`trips/${tripId}/places?language_id=1`);
  }

  saveCityInfo(url, details): Observable<any> {
    return this.api.post(url, details);
  }
  savePlaceInfo(url, details): Observable<any> {
    return this.api.post(url, details);
  }
  removeCityInfo(url, details): Observable<any> {
    return this.api.post(url, details);
  }
  removePlaceInfo(url, details): Observable<any> {
    return this.api.post(url, details);
  }
  publishTrip(url, details): Observable<any> {
    return this.api.post(url, details);
  }
  cancelTrip(url, details): Observable<any> {
    return this.api.post(url, details);
  }

  /**
   * Create trip plan - step 2 submit
   * @param tripId
   * @param details
   */
  addCity(tripId, details): Observable<any> {
    return this.api.post( `trips/${tripId}/add_city`, {city_id: details.id, order: details.order});
  }

  /**
   * Create trip plan - step 3
   * @param tripId
   * @param details
   */
  addPlace(tripId, details): Observable<any> {
    return this.api.post( `trips/${tripId}/add_place` , details);
  }
}
