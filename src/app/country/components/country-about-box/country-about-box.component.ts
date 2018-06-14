import {Component, Input, OnInit} from '@angular/core';
import {CountryService} from '../../services/country.service';

@Component({
  selector: 'app-country-about-box',
  templateUrl: './country-about-box.component.html',
  styleUrls: ['./country-about-box.component.scss']
})
export class CountryAboutBoxComponent implements OnInit {
  @Input() info;

  isCountry: boolean;

  constructor(private countryService: CountryService) {

    this.isCountry = this.countryService.getType() === 'countries';
  }

  ngOnInit() {
  }

}
