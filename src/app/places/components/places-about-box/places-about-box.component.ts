import {Component, Input, OnInit} from '@angular/core';

/**
 * About place component
 * Holds main info about current place
 */
@Component({
  selector: 'app-places-about-box',
  templateUrl: './places-about-box.component.html',
  styleUrls: ['./places-about-box.component.scss']
})
export class PlacesAboutBoxComponent implements OnInit {

  /** main info about current place */
  @Input() info;

  constructor() {
  }

  ngOnInit() {
  }

}
