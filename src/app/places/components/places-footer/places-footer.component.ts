import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-places-footer',
  templateUrl: './places-footer.component.html',
  styleUrls: ['./places-footer.component.scss']
})
export class PlacesFooterComponent implements OnInit {


  @Input() countryData;

  constructor() {}

  ngOnInit() {
  }

}
