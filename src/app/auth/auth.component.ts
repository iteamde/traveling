import { Component, OnInit } from '@angular/core';
import {LoginModalComponent} from './modals/login-modal/login-modal.component';
import {ActivatedRoute} from '@angular/router';
import {RegisterModalComponent} from './modals/register-modal/register-modal.component';
import {RegisterModalStep2Component} from './modals/register-modal-step-2/register-modal-step-2.component';
import {Store} from '@ngrx/store';
import {getAuthError, getAuthModalRef, getLoggedUser, State} from '../core/reducers';
import {SetRegistrationStep, OpenModalAction, RemoveModalRef} from './actions/auth.actions';
import {MatDialog} from '@angular/material';
import {Observable} from 'rxjs/Observable';


@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {
  private str: string;
  private hashTable: any = {
    login : LoginModalComponent,
    signup : RegisterModalComponent,
    signupstep2 : RegisterModalStep2Component
  };


  constructor(route: ActivatedRoute, private store: Store<State>, private dialog: MatDialog) {
    this.str = route.snapshot.url.join('');

  }

  ngOnInit() {

    this.store.select(getAuthModalRef).take(1).subscribe(res => {
      if ( res ) {
        res.close();
        res.afterClosed().subscribe( () => {
          this.store.dispatch(new RemoveModalRef());
          this.openModal();
        });
       } else this.openModal();
    });
  }

  openModal(){
     setTimeout(() => {
        let step = 0;

        if ( this.str ) {
          if (this.str.includes('signup')) {
             step = +this.str.replace( /^\D+/g, '') || 1;
          }
          this.store.dispatch(new OpenModalAction({ref: this.dialog.open(this.hashTable[this.str], {id: this.str})}));
        }
         this.store.dispatch(new SetRegistrationStep(step));
    } , 1);
  }
}
