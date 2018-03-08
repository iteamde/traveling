import { Component, OnInit, AfterContentInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import {LoginModalComponent} from '../modals/login-modal/login-modal.component';
import {MatDialog} from '@angular/material';
import {Store} from '@ngrx/store';
import {State} from '../../core/reducers';
import {SaveToStoreAction} from '../../core/actions/core.actions';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit, AfterContentInit {
  public dialogRef: any;

  constructor(
    private dialog: MatDialog,
    private store: Store<State>

  ) {}

  ngOnInit() {
    this.store.subscribe( data => console.log(data));
  }

  ngAfterContentInit() {
    this.store.dispatch(new SaveToStoreAction({isLoad: true}));
    setTimeout(() => {
      this.dialogRef = this.dialog.open(LoginModalComponent );
      }, 1 );
  }


}
