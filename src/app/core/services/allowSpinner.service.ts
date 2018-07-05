import {Injectable} from '@angular/core';

import {BehaviorSubject} from 'rxjs/BehaviorSubject';

@Injectable()
export class AllowSpinnerService {

  public allowSpinner = new BehaviorSubject(true);


  constructor() {
  }


}
