import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-left-outside-menu',
  templateUrl: './left-outside-menu.component.html',
  styleUrls: ['./left-outside-menu.component.scss']
})
export class LeftOutsideMenuComponent implements OnInit {

  @Input() showMenu;

  constructor() { }

  ngOnInit() {
  }

}
