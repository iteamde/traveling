import {Component, OnInit} from '@angular/core';
import {SwUpdateService} from './shared/services/sw-update.service';
import {SwUpdate} from '@angular/service-worker';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['app.component.scss'],
  providers: [SwUpdate, SwUpdateService]
})
export class AppComponent implements OnInit {

  constructor() {
  }

  ngOnInit() {
  }
}
