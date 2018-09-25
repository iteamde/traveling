import { Component, OnInit } from '@angular/core';

/**
 * Registration modal component (staep-5)
 */
@Component({
  selector: 'app-register-modal-step-5',
  templateUrl: './register-modal-step-5.component.html',
  styleUrls: ['./register-modal-step-5.component.css']
})
export class RegisterModalStep5Component implements OnInit {

  public settings: any = {
    queryUrl: 'users/set/travel_styles',
    getDataUrl: 'travelstyles/search ',
    urlTo: 'signup/done',
    itemToChoose: 3,
    itemsType : 'travel_styles'
  };

  constructor() { }

  ngOnInit() {
  }

}
