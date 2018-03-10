import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {Store} from '@ngrx/store';
import {getLoggedUser, getRegistationStep, State} from '../../core/reducers';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  protected registrationStep$: Observable<any>;

  constructor(private store: Store<State>) {
    this.registrationStep$ = store.select(getRegistationStep);
  }

  ngOnInit() {

  }

}
