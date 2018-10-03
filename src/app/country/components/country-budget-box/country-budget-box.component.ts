import {Component, Input, OnInit} from '@angular/core';

/**
 * Country budget component
 * Show the cost of living
 */
@Component({
  selector: 'app-country-budget-box',
  templateUrl: './country-budget-box.component.html',
  styleUrls: ['./country-budget-box.component.scss']
})
export class CountryBudgetBoxComponent {
  /** main info about country or city */
  @Input() data;

  constructor() { }
}
