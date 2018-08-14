import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-profile-header',
  templateUrl: './profile-header.component.html',
  styleUrls: ['./profile-header.component.scss']
})
export class ProfileHeaderComponent implements OnInit {

  public isCurrent = false;

  public socialList = [
    {socialClass: 'facebook', icon: 'fa fa-facebook'},
    {socialClass: 'twitter', icon: 'fa fa-twitter'},
    {socialClass: 'instagram', icon: 'fa fa-instagram'},
  ];

  public mockTabs = [
    {title: 'Visited', count: 8},
    {title: 'Trip plans', count: 5},
    {title: 'Favorites', count: 27},
    {title: 'Videos', count: 6},
    {title: 'Photos', count: 987},
    {title: 'Reviews', count: 35},
    {title: 'Interests', count: 17}
  ];


  constructor() {
  }

  ngOnInit() {
  }

}
