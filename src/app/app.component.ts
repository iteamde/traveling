import { Component } from '@angular/core';
import {Router} from '@angular/router';
import {MatDialog} from '@angular/material';
import {combineLatest} from 'rxjs/observable/combineLatest';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  constructor( private router: Router, private dialog: MatDialog) {
    combineLatest(router.events, this.dialog.afterOpen).subscribe(() => this.dialog.closeAll());
  }
}
