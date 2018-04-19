import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-country-middle-banner',
  templateUrl: './country-middle-banner.component.html',
  styleUrls: ['./country-middle-banner.component.scss']
})
export class CountryMiddleBannerComponent implements OnInit {
  @Input() data;

  constructor() { }

  ngOnInit() {
  }

}
