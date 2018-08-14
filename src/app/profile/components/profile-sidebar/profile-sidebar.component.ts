import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-profile-sidebar',
  templateUrl: './profile-sidebar.component.html',
  styleUrls: ['./profile-sidebar.component.scss']
})
export class ProfileSidebarComponent implements OnInit {

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

  ngOnInit() {

  }

  getPreviousDays() {
    this.beginOfMonth = this.getBeginOfMonth(this.month.indexOf(this.currentMonth), this.currentYear);
    this.previousDays = Array.from(Array(this.beginOfMonth).keys());
  }


  getBeginOfMonth(month, year) {
    return new Date(year, month, 1).getDay();
  }


  getDaysInMonth(month, year) {
    return new Date(year, month + 1, 0).getDate();
  }

  getCurrentYear() {
    return new Date().getFullYear();
  }

  decrementYear() {
    this.currentYear--;
    this.getPreviousDays();
  }

  incrementYear() {
    if (this.currentYear < this.getCurrentYear()) {
      this.currentYear++;
      this.getPreviousDays();
    }
  }

  getCurrentMonth() {
    const monthIndex = new Date().getMonth();
    return this.month[monthIndex];
  }

  decrementMonth() {
    if (this.currentMonth !== 'January') {
      this.currentMonth = this.month[this.month.indexOf(this.currentMonth) - 1];
      this.getPreviousDays();
    }
  }

  incrementMonth() {
    if (this.currentMonth !== 'December') {
      this.currentMonth = this.month[this.month.indexOf(this.currentMonth) + 1];
      this.getPreviousDays();
    }

  }
}
