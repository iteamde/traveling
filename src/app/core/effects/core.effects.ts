import {Injectable} from '@angular/core';

import * as CoreActions from '../actions/core.actions';
import {Store} from '@ngrx/store';
import {getOpenedModalRef, State} from '../reducers';
import {Actions, Effect} from '@ngrx/effects';

@Injectable()
export class CoreEffects {

  @Effect({dispatch: false})
  navigateBack$ = this.actions$.ofType(CoreActions.CLOSE_OPENED_MODAL)
    .do(() => this.store.select(getOpenedModalRef).take(1).subscribe(res => res && res.close()));

  constructor(private actions$: Actions,
              private store: Store<State>) {
  }
}
