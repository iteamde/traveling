import { Component } from '@angular/core';

/**
 * Registration component (step-4)
 */
@Component({
  selector: 'app-register-modal-step-4',
  templateUrl: './register-modal-step-4.component.html',
  styleUrls: ['./register-modal-step-4.component.css']
})
export class RegisterModalStep4Component {

  public settings: any = {
    queryUrl: 'users/set/fav_places',
    getDataUrl: 'places/search',
    urlTo: 'signup/step5',
    itemToChoose: 3,
    itemsType : 'places'
  };

  constructor() { }
}
