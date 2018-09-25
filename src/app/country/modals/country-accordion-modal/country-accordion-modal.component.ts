import { Component, OnInit } from '@angular/core';

import {getCountryInfo, State} from '../../../core/reducers';
import {CountryService} from '../../services/country.service';
import {ModalManager} from '../../../core/services/modal-manager.service';

import {Store} from '@ngrx/store';

/**
 * Country accordion modal
 */
@Component({
  selector: 'app-country-accordion-modal',
  templateUrl: './country-accordion-modal.component.html',
  styleUrls: ['./country-accordion-modal.component.scss']
})
export class CountryAccordionModalComponent implements OnInit {
  public data: any;
  public openedList: any;
  public isCountry: boolean;

  constructor(private store: Store<State>,
              private countryService: CountryService,
              private modal: ModalManager) {

    // check if current component is country component
    this.isCountry = this.countryService.getType() === 'countries';

    this.data = this.store.select(getCountryInfo);
    this.openedList = {
      languages: false,
      religions: false,
      trans: false,
      limit: false,
      currencies: false,
    };
  }

  ngOnInit() {
  }

  // close() {
  //   this.modal.closeAll();
  // }
}
