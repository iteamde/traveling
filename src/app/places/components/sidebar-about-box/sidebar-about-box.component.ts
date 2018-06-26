import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-sidebar-about-box',
  templateUrl: './sidebar-about-box.component.html',
  styleUrls: ['./sidebar-about-box.component.scss']
})
export class SidebarAboutBoxComponent implements OnInit {

  @Input() data;

  constructor() {

  }

  ngOnInit() {


  }

}
