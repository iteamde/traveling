import {Injectable} from '@angular/core';
import {Actions, Effect} from '@ngrx/effects';
import 'rxjs/add/operator/map';



@Injectable()
export class CoreEffects {

  constructor(private actions$: Actions) {
  }

}
