import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-places-top-banner',
  templateUrl: './places-top-banner.component.html',
  styleUrls: ['./places-top-banner.component.scss']
})
export class PlacesTopBannerComponent implements OnInit {

  @Input() data;

  constructor() { }

  ngOnInit() {
  }

}
