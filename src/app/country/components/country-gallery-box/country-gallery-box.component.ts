import {Component, Input, OnInit} from '@angular/core';
import {ModalManager} from '../../../core/services/modal-manager.service';
import {GalleryModalComponent} from '../gallery-modal/gallery-modal.component';

@Component({
  selector: 'app-country-gallery-box',
  templateUrl: './country-gallery-box.component.html',
  styleUrls: ['./country-gallery-box.component.scss']
})
export class CountryGalleryBoxComponent implements OnInit {
  @Input() info;

  constructor(private modalService: ModalManager) { }

  ngOnInit() {
  }

  showGallery() {
    this.modalService.openModal(GalleryModalComponent);
  }

}
