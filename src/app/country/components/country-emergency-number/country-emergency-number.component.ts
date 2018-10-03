import {Component, Input} from '@angular/core';

/**
 * Country emergency numbers
 * Show all main emergency numbers of current country
 */
@Component({
  selector: 'app-country-emergency-number',
  templateUrl: './country-emergency-number.component.html',
  styleUrls: ['./country-emergency-number.component.scss']
})
export class CountryEmergencyNumberComponent {
  /** main info about country or city */
  @Input() info;

  constructor() { }

}
