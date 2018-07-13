import {PreloadingStrategy, Route} from '@angular/router';
import {Observable} from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import {timer} from 'rxjs/observable/timer';
import { flatMap } from 'rxjs/operators';




export class AppPreloadingStrategy implements PreloadingStrategy {
  preload(route: Route, load: Function): Observable<any> {
    const loadRoute = (delay) => delay
      ? timer(1000).pipe(flatMap(_ => load()))
      : load();
    return route.data && route.data.preload
      ? loadRoute(route.data.delay)
      : of(null);
  }
}
