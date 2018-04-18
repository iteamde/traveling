import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-country-middle-banner',
  templateUrl: './country-middle-banner.component.html',
  styleUrls: ['./country-middle-banner.component.scss']
})
export class CountryMiddleBannerComponent implements OnInit {
  @Input() data;
  @Output() follow: EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  followCountry() {
    this.follow.emit();
  }
}
