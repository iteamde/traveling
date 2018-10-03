import {Component, Input} from '@angular/core';

/**
 * Country middle banner component
 * Hold main image of country
 */
@Component({
  selector: 'app-country-middle-banner',
  templateUrl: './country-middle-banner.component.html',
  styleUrls: ['./country-middle-banner.component.scss']
})
export class CountryMiddleBannerComponent {
  /** main data of current country */
  @Input() data;

  constructor() { }
}
