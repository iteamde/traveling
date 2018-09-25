import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';

import {getLoginStatus, State} from '../core/reducers';

import {Store} from '@ngrx/store';

/**
 * Auth component
 */
@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {
  private path = '';
  private loginStatus = false;

  constructor(private router: Router,
              private store: Store<State>) {
    this.path = router.url;
    store.select(getLoginStatus).subscribe(res => this.loginStatus = res);
  }

  ngOnInit() {
    if (this.path === '/') {
      this.router.navigate([this.loginStatus ? '/home' : '/login']);
    }
  }

}


