import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {Store} from '@ngrx/store';
import {getAuthModalRef, getLoggedUser, State} from '../core/reducers';
import {SetRegistrationStep, OpenModalAction, RemoveModalRef} from './actions/auth.actions';
import {MatDialog} from '@angular/material';
import {routeRelations} from './helpers/relation';



@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {
  private path = '';
  private user$: any;

  constructor( private router: Router , private store: Store<State>, private dialog: MatDialog) {
    this.path = router.url;
    this.user$ = store.select(getLoggedUser);
  }

  ngOnInit() {
    this.user$.subscribe(res => console.log("Its user after login " , res));

    this.store.select(getAuthModalRef).take(1).subscribe(res => {
      if ( res ) {
        res.close();
        res.afterClosed().subscribe( () => {
          this.store.dispatch(new RemoveModalRef());
          this.openModal();
        });
       } else {
        this.openModal();
      }
    });
  }

  openModal() {
     setTimeout(() => {
        let step = 0;

        if ( this.path && this.path !== '/') {
          step = routeRelations[this.path].step;
          this.store.dispatch(new OpenModalAction({ref: this.dialog.open(routeRelations[this.path].component)}));
        }
       this.store.dispatch(new SetRegistrationStep(step));
    } , 1);
  }
}
