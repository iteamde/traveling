import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import {environment} from '../../../environments/environment';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import {Ng4LoadingSpinnerService} from 'ng4-loading-spinner';
import {RemoveErrorAction} from '../actions/error.actions';
import {Store} from '@ngrx/store';
import {State} from '../reducers';



@Injectable()
export class ApiService {
  constructor(
    private http: HttpClient,
    private router: Router,
    private spinnerService: Ng4LoadingSpinnerService,
    private store: Store<State>
  ) {}


  post(details , url , config?): Observable<any> {
    this.store.dispatch(new RemoveErrorAction());
    console.log("ITS HERE", details , url);
    this.spinnerService.show();
    return this.http.post(environment.apiUrl + url, details).map((res) => {
      this.spinnerService.hide();
      return res;
    } ).catch( err => {
      if (err) {
        this.spinnerService.hide();
        return this.router.navigate(['/error']);
      }});
  }

  get(url , config?): Observable<any> {
    this.store.dispatch(new RemoveErrorAction());
    this.spinnerService.show();
    return this.http.get(environment.apiUrl + url).map((res) => {
      this.spinnerService.hide();
      return res;
    } ).catch( err => {
      if (err) {
        this.spinnerService.hide();
        return this.router.navigate(['/error']);
      }});
  }
}
