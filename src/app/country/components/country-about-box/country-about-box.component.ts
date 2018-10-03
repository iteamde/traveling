import {Component, Input} from '@angular/core';

/**
 * Component that contains info about country or city
 */
@Component({
  selector: 'app-country-about-box',
  templateUrl: './country-about-box.component.html',
  styleUrls: ['./country-about-box.component.scss']
})
export class CountryAboutBoxComponent {

  /** main info about country or city */
  @Input() info;
  /** if component is country component */
  @Input() isCountry;

  constructor() {
  }
}
