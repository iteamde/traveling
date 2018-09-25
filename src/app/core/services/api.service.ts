import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

import {environment} from '../../../environments/environment';
import {Observable} from 'rxjs/Observable';

import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

/**
 * Api service
 * Get info from server
 * Post info to server
 */
@Injectable()
export class ApiService {

  constructor(private http: HttpClient) {
  }

  post(url, details, config?): Observable<any> {
    return this.http.post(environment.apiUrl + url, details);
  }

  get(url, config?): Observable<any> {
    return this.http.get(environment.apiUrl + url);
  }

}
