import {Component} from '@angular/core';

/**
 * Custom calendar component
 */
@Component({
  selector: 'app-custom-calendar',
  templateUrl: './custom-calendar.component.html',
  styleUrls: ['./custom-calendar.component.scss']
})
export class CustomCalendarComponent {

  public currentYear;
  public currentMonth;
  public month = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  public days = Array.from(Array(32).keys());
  public beginOfMonth;
  public previousDays;


  constructor() {
    this.currentYear = this.getCurrentYear();
    this.currentMonth = this.getCurrentMonth();
    this.getPreviousDays();
  }

  getPreviousDays() {
    this.beginOfMonth = this.getBeginOfMonth(this.month.indexOf(this.currentMonth), this.currentYear);
    this.previousDays = this.beginOfMonth < 7 ? Array.from(Array(this.beginOfMonth).keys()) : [];
  }

  /**
   * Get the first day (day of week) of month within specific year
   * @param month
   * @param year
   * @returns {number}
   */
  getBeginOfMonth(month, year) {
    return new Date(year, month, 1).getDay();
  }

  /**
   * Get quantity of days in current month within specific year
   * @param month
   * @param year
   * @returns {number}
   */
  getDaysInMonth(month, year) {
    return new Date(year, month + 1, 0).getDate();
  }

  /**
   * Get current year
   * @returns {number}
   */
  getCurrentYear() {
    return new Date().getFullYear();
  }
  /**
   * Decrement year
   */
  decrementYear() {
    this.currentYear--;
    this.getPreviousDays();
  }

  /**
   * Increment year
   */
  incrementYear() {
    if (this.currentYear < this.getCurrentYear()) {
      this.currentYear++;
      this.getPreviousDays();
    }
  }

  /**
   * Get current month
   * @returns {string}
   */
  getCurrentMonth() {
    const monthIndex = new Date().getMonth();
    return this.month[monthIndex];
  }

  /**
   * Decrement month
   */
  decrementMonth() {
    if (this.currentMonth !== 'January') {
      this.currentMonth = this.month[this.month.indexOf(this.currentMonth) - 1];
      this.getPreviousDays();
    }
  }

  /**
   * Increment month
   */
  incrementMonth() {
    if (this.currentMonth !== 'December') {
      this.currentMonth = this.month[this.month.indexOf(this.currentMonth) + 1];
      this.getPreviousDays();
    }
  }
}
