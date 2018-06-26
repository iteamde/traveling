import {Component, Input, OnInit} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-places-photo-box',
  templateUrl: './places-photo-box.component.html',
  styleUrls: ['./places-photo-box.component.scss']
})
export class PlacesPhotoBoxComponent implements OnInit {

  @Input() data;
  @Input() info;

  constructor(private router: Router) { }

  ngOnInit() {
  }

  openGallery(e) {
    e.preventDefault();
    if (this.info.media.length && this.info.media[0].id) {
      this.router.navigate([`${this.router.url}/${this.info.routePath}/${this.info.media[0].id}`]);
    }
  }
}
