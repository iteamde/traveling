import { Injectable } from '@angular/core';
import {HttpRequest, HttpHandler, HttpEvent, HttpInterceptor, HttpResponse, HttpErrorResponse} from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import {AuthHelper} from './auth.helper';
import {Router} from '@angular/router';
import {RemoveErrorAction} from '../../core/actions/error.actions';
import {Store} from '@ngrx/store';
import {Ng4LoadingSpinnerService} from 'ng4-loading-spinner';
import {State} from '../../core/reducers';
import {AllowSpinnerService} from '../../core/services/allowSpinner.service';


@Injectable()
export class JwtInterceptor implements HttpInterceptor {
  private spinnerCounter = 0;
  public allowSpinner: boolean;

  constructor( private authHelper: AuthHelper,
               private router: Router,
               private spinnerService: Ng4LoadingSpinnerService,
               private store: Store<State>,
               private allowSpinerService: AllowSpinnerService) {

    this.allowSpinerService.allowSpinner.subscribe(res => this.allowSpinner = res);
  }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    //UI helpers
    this.store.dispatch(new RemoveErrorAction());
    if ( this.allowSpinner ) this.spinnerService.show();
    this.spinnerCounter++;

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
        this.spinnerCounter--;
        if (!this.spinnerCounter) {
          this.allowSpinerService.allowSpinner.next(true);
          this.spinnerService.hide();
        }
      }
    },(err: any) => {
      if (err instanceof HttpErrorResponse) {
        if (err.status === 401) {
          let loc = {...document.location};
          return this.router.navigate(['/login'], { queryParams: { returnUrl: loc.pathname }});
          // redirect to the login route
          // or show a modal
        }
      }
    })
    .catch(err => {
      this.spinnerCounter = 0;
      this.spinnerService.hide();
        if (err instanceof HttpErrorResponse) {
          if (err.status === 401) {
           // this.router.navigate(['/login']);
            return Observable.throw(err);
          }
        }
        this.router.navigate(['/error']);
      return Observable.throw(err);
    });
  }
}
