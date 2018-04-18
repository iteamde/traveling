import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-sidebar-about-box',
  templateUrl: './sidebar-about-box.component.html',
  styleUrls: ['./sidebar-about-box.component.scss']
})
export class SidebarAboutBoxComponent implements OnInit {

  @Input() data;
  @Output() follow: EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  followCountry() {
    this.follow.emit();
  }

}
