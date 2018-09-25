import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

/**
 * Country middle banner component
 * Hold main image of country
 */
@Component({
  selector: 'app-country-middle-banner',
  templateUrl: './country-middle-banner.component.html',
  styleUrls: ['./country-middle-banner.component.scss']
})
export class CountryMiddleBannerComponent implements OnInit {
  /** main data of current country */
  @Input() data;

  constructor() { }

  ngOnInit() {
  }

}
