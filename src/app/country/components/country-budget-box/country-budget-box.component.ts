import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-country-budget-box',
  templateUrl: './country-budget-box.component.html',
  styleUrls: ['./country-budget-box.component.scss']
})
export class CountryBudgetBoxComponent implements OnInit {
  @Input() data;
  @Input() isCountry;

  constructor() { }

  ngOnInit() {
  }

}
