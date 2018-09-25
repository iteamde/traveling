import { Component, OnInit } from '@angular/core';

import {getCountryHolidays, State} from '../../../core/reducers';

import {Store} from '@ngrx/store';

/**
 * Holidays list component
 * Holds info about holidays
 */
@Component({
  selector: 'app-holidays-list',
  templateUrl: './holidays-list.component.html',
  styleUrls: ['./holidays-list.component.scss']
})
export class HolidaysListComponent implements OnInit {
  public data: any;
  constructor(private store: Store<State>) {
    this.data = this.store.select(getCountryHolidays);
  }

  ngOnInit() {
  }

}
