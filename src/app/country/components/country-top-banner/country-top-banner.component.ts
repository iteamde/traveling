import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-country-top-banner',
  templateUrl: './country-top-banner.component.html',
  styleUrls: ['./country-top-banner.component.scss']
})
export class CountryTopBannerComponent implements OnInit {
  @Input() data;
  @Output() follow: EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  followCountry() {
    this.follow.emit();
  }

}
