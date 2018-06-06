import { Component, OnInit } from '@angular/core';
import {getCountryInfo, State} from '../../../core/reducers';
import {Store} from '@ngrx/store';

@Component({
  selector: 'app-country-accordion-modal',
  templateUrl: './country-accordion-modal.component.html',
  styleUrls: ['./country-accordion-modal.component.scss']
})
export class CountryAccordionModalComponent implements OnInit {
  public data: any;
  public openedList: any;

  constructor(private store: Store<State>) {
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

}
