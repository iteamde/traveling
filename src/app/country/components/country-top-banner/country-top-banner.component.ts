import {Component, Input, OnInit} from '@angular/core';

/**
 * Country top banner component
 * Holds country flag img, number of followers
 */
@Component({
  selector: 'app-country-top-banner',
  templateUrl: './country-top-banner.component.html',
  styleUrls: ['./country-top-banner.component.scss']
})
export class CountryTopBannerComponent implements OnInit {
  /** main data of current country */
  @Input() data;

  constructor() { }

  ngOnInit() {
  }

}
