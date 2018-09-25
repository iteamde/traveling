import {Component, Input, OnInit} from '@angular/core';
import {Router} from '@angular/router';

/**
 * User rating component
 * Shows users comments, reviews  and rating to current place
 */
@Component({
  selector: 'app-user-rating-box',
  templateUrl: './user-rating-box.component.html',
  styleUrls: ['./user-rating-box.component.scss']
})
export class UserRatingBoxComponent implements OnInit {

  /** main idata of current place */
  @Input() data;

  constructor(private router: Router) {}

  ngOnInit() {
  }

  /**
   * Open modal to write review to current place
   * @param e event
   */
  writeReview(e) {
    e.preventDefault();
    this.router.navigate([`${this.router.url}/review/new`]);
  }
}
