import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import {environment} from '../../../environments/environment';
import {Observable} from 'rxjs/Observable';
import {Action} from '@ngrx/store';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';



@Injectable()
export class AuthService {
  constructor(
    private http: HttpClient,
    private router: Router,
  ) {}

  register(details): Observable<any> {
      return this.http.post(environment.apiUrl + 'users/create', details);
  }

  register_step2(details): Observable<any> {
    return this.http.post(environment.apiUrl + 'users/create/step2', details);
  }

}
