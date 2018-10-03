import { Component, Input } from '@angular/core';

/**
 * Country index component
 * Show main indexes of current country (ex: quality of life)
 */
@Component({
  selector: 'app-country-indexes-box',
  templateUrl: './country-indexes-box.component.html',
  styleUrls: ['./country-indexes-box.component.scss']
})
export class CountryIndexesBoxComponent {
  /** main info about country or city */
  @Input() info;
  /** if component is country component */
  @Input() isCountry;

  constructor() { }

}
