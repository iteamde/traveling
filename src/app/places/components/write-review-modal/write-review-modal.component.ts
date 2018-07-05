import {Component, Inject, OnDestroy, OnInit} from '@angular/core';
import { Router} from '@angular/router';
import {PlacesService} from '../../services/places.service';
import {MAT_DIALOG_DATA} from '@angular/material';
import {Store} from '@ngrx/store';
import {getUserId, State} from '../../../core/reducers';
import {ToastrService} from 'ngx-toastr';

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

  constructor(@Inject(MAT_DIALOG_DATA) public data: any,
              private router: Router,
              private store: Store<State>,
              private toastr: ToastrService,
              private placesService: PlacesService) { }

  ngOnInit() {
    console.log(this.data)
    this.urlTo = this.router.url.split('/').slice(1, 3).join('/');
    this.placesId = +this.router.url.split('/')[2];
  }

  toggleInputField(e) {
    e.preventDefault();
    this.showInputField = !this.showInputField;
  }

  closeModal() {
    // this.data.close();
    this.router.navigate([`/${this.urlTo}`]);
  }

  sendReview() {
    this.subscriptions$[0] = this.placesService.postReview(this.placesId, this.currentReview, 1, this.score)
      .subscribe(res => {
        console.log('POSTreview:', res);
        res.success ? this.addReview() : this.toastrError(res.data.message);
      });

  }

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

  toastrError(err?) {
    this.toastr.error(err || 'Oops , something went wrong');
  }

  toastrSuccess(success?) {
    this.toastr.success(success || 'Succesfully Add Review');
  }


  cancelReview() {
    this.currentReview = '';
    this.showInputField = false;
    this.score = 0;
  }

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
