import {Component, Input} from '@angular/core';

import {ModalManager} from '../../../core/services/modal-manager.service';
import {CountryAccordionModalComponent} from '../../modals/country-accordion-modal/country-accordion-modal.component';

/**
 * Component that contains info about country or city
 */
@Component({
  selector: 'app-country-about-box2',
  templateUrl: './country-about-box2.component.html',
  styleUrls: ['./country-about-box2.component.scss']
})
export class CountryAboutBox2Component {
  /** main info about country or city */
  @Input() info;
  /** if component is country component */
  @Input() isCountry;

  constructor(private modalService: ModalManager) {
  }

  /**
   * Show country accordion modal
   */
  showPopup() {
    this.modalService.openModal(CountryAccordionModalComponent);
  }
}
