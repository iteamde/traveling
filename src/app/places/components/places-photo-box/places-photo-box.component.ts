import {Component, Input} from '@angular/core';
import {Router} from '@angular/router';

/**
 * Places photo component
 * Holds several photo of current place
 */
@Component({
  selector: 'app-places-photo-box',
  templateUrl: './places-photo-box.component.html',
  styleUrls: ['./places-photo-box.component.scss']
})
export class PlacesPhotoBoxComponent {

  /** main data of current place */
  @Input() data;
  /** info for image gallery */
  @Input() info;

  constructor(private router: Router) { }

  /**
   * Open image gallery of current place
   * @param e event
   */
  openGallery(e) {
    e.preventDefault();
    if (this.info.media.length && this.info.media[0].id) {
      this.router.navigate([`${this.router.url}/${this.info.routePath}/${this.info.media[0].id}`]);
    }
  }
}
