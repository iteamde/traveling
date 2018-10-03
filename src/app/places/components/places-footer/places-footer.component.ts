import {Component, Input} from '@angular/core';

/**
 * Places footer component
 * Holds info about country of current place
 */
@Component({
  selector: 'app-places-footer',
  templateUrl: './places-footer.component.html',
  styleUrls: ['./places-footer.component.scss']
})
export class PlacesFooterComponent {

  /** info about country of current place */
  @Input() countryData;

  constructor() {}
}
