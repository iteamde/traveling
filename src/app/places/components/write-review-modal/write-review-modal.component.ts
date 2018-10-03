import {Component, Inject, OnDestroy, OnInit} from '@angular/core';
import { Router} from '@angular/router';
import {MAT_DIALOG_DATA} from '@angular/material';

import {PlacesService} from '../../services/places.service';
import { State} from '../../../core/reducers';

import {ToastrService} from 'ngx-toastr';
import {Store} from '@ngrx/store';

/**
 * Write review modal component
 * Allow user to write review and set rating to current place
 */
@Component({
  selector: 'app-write-review-modal',
  templateUrl: './write-review-modal.component.html',
  styleUrls: ['./write-review-modal.component.scss']
})
export class WriteReviewModalComponent implements OnInit, OnDestroy {

  public urlTo: string;
  public showInputField = false;
  public currentReview: string;
  public placesId: number;
  public subscriptions$ = [];
  public score = 0;
  public startPoint = 0;
  public endPoint = 4;
  public currentUser;


  constructor(@Inject(MAT_DIALOG_DATA) public data: any,
              private router: Router,
              private store: Store<State>,
              private toastr: ToastrService,
              private placesService: PlacesService) {

    // get info for current user from local storage
    this.currentUser = JSON.parse(localStorage.getItem('aboutUser'));
  }

  ngOnInit() {
    this.urlTo = this.router.url.split('/').slice(1, 3).join('/');
    this.placesId = +this.router.url.split('/')[2];
  }

  /**
   * Show or hide input fiel for review
   * @param e event
   */
  toggleInputField(e) {
    e.preventDefault();
    this.showInputField = !this.showInputField;
  }

  /**
   * Close review modal
   */
  closeModal() {
    // this.data.close();
    this.router.navigate([`/${this.urlTo}`]);
  }

  /**
   * Send review of current place to server
   */
  sendReview() {
    this.subscriptions$[0] = this.placesService.postReview(this.placesId, this.currentReview, this.currentUser.id, this.score)
      .subscribe(res => {
        res.success ? this.addReview() : this.toastrError(res.data.message);
      });
  }

  /**
   * Add review
   */
  addReview() {
    const optionOfDate = {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    }

    const reviewModel = {
      comment: this.currentReview,
      created_at: new Date().toLocaleString('en-US', optionOfDate),
      id: 2,
      ip_address: '195.234.70.138',
      places_id: 180,
      score: this.score,
      updated_at: '2018-07-04 08:23:46',
      users_id: 1,
      justHappen: true
    }

    this.data.data.reviews.reviews.push(reviewModel);
    this.toastrSuccess();
    this.currentReview = '';
    this.score = 0;
  }

  /**
   * Show error notification
   * @param err
   */
  toastrError(err?) {
    this.toastr.error(err || 'Oops , something went wrong');
  }

  /**
   * Show success notification
   * @param success
   */
  toastrSuccess(success?) {
    this.toastr.success(success || 'Succesfully Add Review');
  }

  /**
   * Cancel review
   */
  cancelReview() {
    this.currentReview = '';
    this.showInputField = false;
    this.score = 0;
  }

  /**
   * Load more reviews
   * @param e event
   */
  loadMoreReviews(e) {
    e.preventDefault();
    if (this.data.data.reviews.reviews.length >= this.endPoint) {
      this.endPoint += 4;
    }
    if (this.endPoint > this.data.data.reviews.reviews.length) {
      this.endPoint = this.data.data.reviews.reviews.length;
    }
  }

  ngOnDestroy() {
    if (this.subscriptions$.length) {
      this.subscriptions$.forEach(item => item.unsubscribe());
    }
  }
}
