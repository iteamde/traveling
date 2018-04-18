import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-country-gallery-box',
  templateUrl: './country-gallery-box.component.html',
  styleUrls: ['./country-gallery-box.component.scss']
})
export class CountryGalleryBoxComponent implements OnInit {
  @Input() info;

  constructor() { }

  ngOnInit() {
    console.log("INFO", this.info);
  }

}
