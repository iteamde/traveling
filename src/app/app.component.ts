import { Component } from '@angular/core';
import {Router} from '@angular/router';
import {MatDialog} from '@angular/material';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  constructor( private router: Router, private dialog: MatDialog) {
    router.events.subscribe( () => this.dialog.closeAll());
  }
}
