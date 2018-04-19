import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-country-top-banner',
  templateUrl: './country-top-banner.component.html',
  styleUrls: ['./country-top-banner.component.scss']
})
export class CountryTopBannerComponent implements OnInit {
  @Input() data;

  constructor() { }

  ngOnInit() {
  }

}
