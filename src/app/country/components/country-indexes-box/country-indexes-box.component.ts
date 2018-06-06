import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-country-indexes-box',
  templateUrl: './country-indexes-box.component.html',
  styleUrls: ['./country-indexes-box.component.scss']
})
export class CountryIndexesBoxComponent implements OnInit {
  @Input() info;

  constructor() { }

  ngOnInit() {
  }

}
