import { Component, OnInit } from '@angular/core';
import {FormGroup, FormBuilder} from '@angular/forms';
import {RegisterAction} from '../../actions/auth.actions';
import {Store} from '@ngrx/store';
import {State} from '../../../core/reducers';


@Component({
  selector: 'app-register-modal',
  templateUrl: './register-modal.component.html',
  styleUrls: ['./register-modal.component.css']
})
export class RegisterModalComponent implements OnInit {
  public user: any = {};
  constructor( private store: Store<State> ) { }

  ngOnInit() {

  }


  register() {
    console.log("Form Submitted" , this.user);
    this.store.dispatch(new RegisterAction(this.user));
  }
}
