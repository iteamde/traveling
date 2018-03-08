import { Component, OnInit } from '@angular/core';
import {Store} from '@ngrx/store';
import {State , getLoggedUser} from '../../../core/reducers';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/take';


@Component({
  selector: 'app-register-modal-step-2',
  templateUrl: './register-modal-step-2.component.html',
  styleUrls: ['./register-modal-step-2.component.css']
})
export class RegisterModalStep2Component implements OnInit {
  protected user$: Observable<any>;

  constructor(private store: Store<State>) {
    this.user$ = store.select(getLoggedUser);
  }

  ngOnInit() {

  }

}
