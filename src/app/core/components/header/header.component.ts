import { Component, OnInit } from '@angular/core';

import {getRegistationStep, State} from '../../reducers/index';

import {Observable} from 'rxjs/Observable';
import {Store} from '@ngrx/store';


/**
 * Header component
 * Includes PROGRESS SECTION  when user takes registration
 */
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['header.component.scss']
})
export class HeaderComponent implements OnInit {

  public registrationStep$: Observable<any>;

  constructor(private store: Store<State>) {
    this.registrationStep$ = store.select(getRegistationStep);
  }

  ngOnInit() {

  }

}
