import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-country-emergency-number',
  templateUrl: './country-emergency-number.component.html',
  styleUrls: ['./country-emergency-number.component.scss']
})
export class CountryEmergencyNumberComponent implements OnInit {
  @Input() info;

  constructor() { }

  ngOnInit() {
  }

}
