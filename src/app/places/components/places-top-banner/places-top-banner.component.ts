import {Component, Input, OnInit} from '@angular/core';

/**
 * Places top banner component
 * Holds info main info about current place
 */
@Component({
  selector: 'app-places-top-banner',
  templateUrl: './places-top-banner.component.html',
  styleUrls: ['./places-top-banner.component.scss']
})
export class PlacesTopBannerComponent implements OnInit {

  /** main info about current place */
  @Input() data;

  constructor() { }

  ngOnInit() {
  }

}
