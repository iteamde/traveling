import {Component, Input, OnInit} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-user-rating-box',
  templateUrl: './user-rating-box.component.html',
  styleUrls: ['./user-rating-box.component.scss']
})
export class UserRatingBoxComponent implements OnInit {

  @Input() data;


  constructor(private router: Router) { }

  ngOnInit() {
  }

  writeReview(e) {
    e.preventDefault();
    this.router.navigate([`${this.router.url}/review/new`]);
  }
}
