import {Component, Input, OnInit} from '@angular/core';
import {ModalManager} from '../../../core/services/modal-manager.service';
import {CountryAccordionModalComponent} from '../../modals/country-accordion-modal/country-accordion-modal.component';

@Component({
  selector: 'app-country-about-box2',
  templateUrl: './country-about-box2.component.html',
  styleUrls: ['./country-about-box2.component.scss']
})
export class CountryAboutBox2Component implements OnInit {
  @Input() info;

  constructor(private modalService: ModalManager) { }

  ngOnInit() {
  }

  showPopup() {
    this.modalService.openModal(CountryAccordionModalComponent);
  }
}
