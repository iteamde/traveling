import {Component, Input, OnInit} from '@angular/core';


@Component({
  selector: 'app-places-about-box',
  templateUrl: './places-about-box.component.html',
  styleUrls: ['./places-about-box.component.scss']
})
export class PlacesAboutBoxComponent implements OnInit {
  @Input() info;

  constructor() {
  }

  ngOnInit() {
  }

}
