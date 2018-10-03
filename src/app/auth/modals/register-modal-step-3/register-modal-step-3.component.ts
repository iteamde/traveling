import { Component } from '@angular/core';

/**
 * Register modal component (step-3)
 */
@Component({
  selector: 'app-register-modal-step-3',
  templateUrl: './register-modal-step-3.component.html',
  styleUrls: ['./register-modal-step-3.component.css']
})
export class RegisterModalStep3Component {

  public settings: any = {
    queryUrl: 'users/set/fav_countries',
    getDataUrl: 'countries/search',
    urlTo: 'signup/step4',
    itemToChoose: 5,
    itemsType : 'countries'
  };

  constructor() {}

}
