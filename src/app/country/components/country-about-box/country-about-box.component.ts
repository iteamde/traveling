import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-country-about-box',
  templateUrl: './country-about-box.component.html',
  styleUrls: ['./country-about-box.component.scss']
})
export class CountryAboutBoxComponent implements OnInit {
  @Input() info;

  constructor() { }

  ngOnInit() {
  }

}
