import { Component, OnInit } from '@angular/core';

/**
 * Main header of app
 * Includes links to: Plan Trip, Messages, Help, Menu button
 */
@Component({
  selector: 'app-main-header',
  templateUrl: './main-header.component.html',
  styleUrls: ['./main-header.component.scss']
})
export class MainHeaderComponent implements OnInit {
  public isMenuOpen = false;

  constructor() { }

  ngOnInit() {
  }

}
