import {Component, Input, OnInit} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-country-gallery-box',
  templateUrl: './country-gallery-box.component.html',
  styleUrls: ['./country-gallery-box.component.scss']
})
export class CountryGalleryBoxComponent implements OnInit {
  @Input() info;

  constructor(private router: Router) { }

  ngOnInit() {
  }

  openGallery() {
    if (this.info.media.length && this.info.media[0].id) {
      this.router.navigate([`${this.router.url}/${this.info.routePath}/${this.info.media[0].id}`]);
    }
  }
}
