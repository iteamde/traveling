import { Injectable } from '@angular/core';
import {HttpRequest, HttpHandler, HttpEvent, HttpInterceptor, HttpResponse} from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import {AuthHelper} from './auth.helper';
import {Router} from '@angular/router';
import {RemoveErrorAction} from '../../core/actions/error.actions';
import {Store} from '@ngrx/store';
import {Ng4LoadingSpinnerService} from 'ng4-loading-spinner';
import {State} from '../../core/reducers';

@Injectable()
export class JwtInterceptor implements HttpInterceptor {

  constructor( private authHelper: AuthHelper,
               private router: Router,
               private spinnerService: Ng4LoadingSpinnerService,
               private store: Store<State>) { }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    //UI helpers
    this.store.dispatch(new RemoveErrorAction());
    this.spinnerService.show();

    // add authorization header with jwt token if available
    let userToken = this.authHelper.getAuthToken();
    if (userToken) {
      request = request.clone({
        setHeaders: {
          Authorization: `Bearer ${userToken}`
        }
      });
    }

    return next.handle(request).do(event => {
      if (event instanceof HttpResponse) {
        this.spinnerService.hide();
      }
    })
    .catch(err => {
      this.spinnerService.hide();
      this.router.navigate(['/error']);
      return Observable.throw(err);
    });
  }
}
