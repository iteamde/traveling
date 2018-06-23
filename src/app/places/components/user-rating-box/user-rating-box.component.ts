import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-user-rating-box',
  templateUrl: './user-rating-box.component.html',
  styleUrls: ['./user-rating-box.component.scss']
})
export class UserRatingBoxComponent implements OnInit {

  @Input() data;


  constructor() { }

  ngOnInit() {
  }

}
