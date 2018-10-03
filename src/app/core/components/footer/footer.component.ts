import { Component, OnInit } from '@angular/core';

/**
 * Footer component
 * Includes links to:  About, Careers, Site map, Privacy, Terms, Contact
 */
@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['footer.component.scss']
})
export class FooterComponent {

  constructor() { }

  /**
   * Get current year
   * @returns {number}
   */
  getCurrentYear() {
    return new Date().getFullYear();
  }
}
