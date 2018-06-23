import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-sidebar-about-box',
  templateUrl: './sidebar-about-box.component.html',
  styleUrls: ['./sidebar-about-box.component.scss']
})
export class SidebarAboutBoxComponent implements OnInit {


  @Input() data;

  randomImage: string;

  constructor() {
  }

  ngOnInit() {

    this.getRandomImage();

  }

  getRandomImage() {
    if (this.data.media.length && this.data.media[0].url) {
      this.randomImage = this.data.media[Math.floor(Math.random() * this.data.media.length)].url;
    }

  }

}
