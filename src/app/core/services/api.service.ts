import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import {environment} from '../../../environments/environment';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import {Ng4LoadingSpinnerService} from 'ng4-loading-spinner';



@Injectable()
export class ApiService {
  constructor(
    private http: HttpClient,
    private router: Router,
    private spinnerService: Ng4LoadingSpinnerService
  ) {}


    post(details , url , config?): Observable<any> {
      this.spinnerService.show();
      return this.http.post(environment.apiUrl + url, details).map((res) => {
        this.spinnerService.hide();
        return res;
      } );
    }
}
