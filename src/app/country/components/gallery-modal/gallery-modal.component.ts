import {Component, Inject, OnDestroy, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA} from '@angular/material';
import {Store} from '@ngrx/store';
import {getOpenedModalRef, State} from '../../../core/reducers';
import {CountryService} from '../../services/country.service';
import {AutoUnsubscribe} from 'ngx-auto-unsubscribe';
import {ToastrService} from 'ngx-toastr';

@AutoUnsubscribe({includeArrays: true})
@Component({
  selector: 'app-gallery-modal',
  templateUrl: './gallery-modal.component.html',
  styleUrls: ['./gallery-modal.component.scss']
})
export class GalleryModalComponent implements OnInit, OnDestroy {
  public currentIndex = 0;
  public medias;
  public currentComment: string;
  private subscriptions = [];
  constructor(@Inject(MAT_DIALOG_DATA) public data: any,
              private store: Store<State>,
              private countryService: CountryService,
              private toastr: ToastrService) {
    this.medias = this.data.data;
  }

  ngOnInit() {
    this.getReactions();
    console.log("GalleryModalComponent init", this.medias);
  }

  sendComment() {
    console.log("Enter pressed", this.currentComment);
    this.countryService.sendComment(this.medias[this.currentIndex].id, this.currentComment)
      .subscribe(res => res.status ? this.addComment() : this.toastrError());
  }

  addComment() {
    const commentModel = {
      comment: this.currentComment,
      user: {username: "Some hardcoded username"},
      created_at: new Date()
    };
    this.medias[this.currentIndex].reactions.comments.push(commentModel);
    this.currentComment = '';
  }

  toastrError(err?) {
    this.toastr.error(err || 'Oops , something went wrong');
  }

  toastrSuccess(err?) {
    this.toastr.success(err || 'Succesfully completed');
  }

  nextSlide() {
    this.currentIndex++;
    this.getReactions();
  }

  prevSlide() {
    this.currentIndex--;
    this.getReactions();
  }

  selectMedia(i) {
    this.currentIndex = i;
    this.getReactions();
  }

  closeModal() {
    this.subscriptions.push(this.store.select(getOpenedModalRef).take(1).subscribe(res => res && res.close()));
  }

  getReactions() {
    if (!this.medias[this.currentIndex].reactions) {
      this.countryService.getReactions(this.medias[this.currentIndex].id)
        .subscribe(res => this.medias[this.currentIndex].reactions = res.data);
    }
  }

  reportMedia() {
    this.countryService.reportMedia(this.medias[this.currentIndex].id)
      .subscribe(res => res.status ? this.toastrSuccess(res.data.message) : this.toastrError(res.data.message));
  }

  likeMedia() {
    this.countryService.likeMedia(this.medias[this.currentIndex].id)
      .subscribe(res => res.liked ? this.likedSuccess() : this.removeLike());
  }

  likedSuccess() {
    this.medias[this.currentIndex].reactions.likes.length++;
    this.toastrSuccess('Liked successfully added');
  }

  removeLike() {
    this.medias[this.currentIndex].reactions.likes.length--;
    this.toastrError('Like  removed');
  }

  ngOnDestroy() {

  }
}
