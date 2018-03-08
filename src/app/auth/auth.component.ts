import { Component, OnInit } from '@angular/core';
import {LoginModalComponent} from './modals/login-modal/login-modal.component';
import {ActivatedRoute} from '@angular/router';
import {MatDialog} from '@angular/material';
import {RegisterModalComponent} from './modals/register-modal/register-modal.component';
import {RegisterModalStep2Component} from './modals/register-modal-step-2/register-modal-step-2.component';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {
  private str: string;
  private dialogRef: any;
  private hashTable: any = {
    login : LoginModalComponent,
    signup : RegisterModalComponent,
    signupstep2 : RegisterModalStep2Component
  };


  constructor(route: ActivatedRoute, private dialog: MatDialog) {
    this.str = route.snapshot.url.join('');
  }

  ngOnInit() {


    setTimeout(() => {
        if ( this.str ) {
          this.dialogRef = this.dialog.open(this.hashTable[this.str] , {id: this.str} );
          console.log("Auth component dialgoREF", this.dialogRef);
        }
    } , 1);
  }
}
