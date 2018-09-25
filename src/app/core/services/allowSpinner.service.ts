import {Injectable} from '@angular/core';

import {BehaviorSubject} from 'rxjs/BehaviorSubject';

/**
 * Allow or not to show spinner while pending for request from server
 */
@Injectable()
export class AllowSpinnerService {

  public allowSpinner = new BehaviorSubject(true);

  constructor() {
  }

}
