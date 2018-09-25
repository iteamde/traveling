import {Component, Input, OnInit} from '@angular/core';
import {Router} from '@angular/router';

/**
 * Image gallery component
 */
@Component({
  selector: 'app-gallery-box',
  templateUrl: './gallery-box.component.html',
  styleUrls: ['./gallery-box.component.scss']
})
export class GalleryBoxComponent implements OnInit {
  /** info about parent(country, city, place) component */
  @Input() info;

  constructor(private router: Router) { }

  ngOnInit() {
  }

  /**
   * Open modal image gallery component by navigate by url
   */
  openGallery() {
    if (this.info.media.length && this.info.media[0].id) {
      this.router.navigate([`${this.router.url}/${this.info.routePath}/${this.info.media[0].id}`]);
    }
  }
}
