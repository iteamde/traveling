import {Component, Inject, OnDestroy, OnInit} from '@angular/core';
import { Router} from '@angular/router';
import {MAT_DIALOG_DATA} from '@angular/material';
import {Store} from '@ngrx/store';

import {AutoUnsubscribe} from 'ngx-auto-unsubscribe';
import {ToastrService} from 'ngx-toastr';

import {CountryService} from '../../../country/services/country.service';
import {getOpenedModalRef, State} from '../../../core/reducers';

import * as findIndex from 'lodash/findIndex';

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
  public pageUrl = window.location.href;
  public pageUrlEncoded = encodeURIComponent(window.location.href);
  public isActiveSocialShare = false;
  public replayTo = {
    id: 0,
    name: ''
  };
  public startPoint = 0;
  public endPoint = 10;
  private url: string;
  private subscriptions = [];
  constructor(@Inject(MAT_DIALOG_DATA) public data: any,
              private store: Store<State>,
              private countryService: CountryService,
              private toastr: ToastrService,
              private router: Router
             ) {
    this.medias = this.data.data;
    console.log('MEDIAS:', this.medias);
    this.url = this.router.url.substr( 0, this.router.url.lastIndexOf('/') + 1);

  }

  ngOnInit() {
    console.log('data.params',  this.data)
    this.currentIndex = findIndex(this.medias, {id: +this.data.params.mediaId});
    this.currentIndex = (this.currentIndex === -1) ? 0 : this.currentIndex;
    this.getReactions();
  }

  setReplyTo(id, name) {
    this.replayTo.id = id;
    this.replayTo.name = name;
  }

  sendComment() {
    console.log('Enter pressed', this.currentComment);
    this.countryService.sendComment(this.medias[this.currentIndex].id, this.currentComment,  this.replayTo.id)
      .subscribe(res => res.status ? this.addComment() : this.toastrError());
  }
  toastrError(err?) {
    this.toastr.error(err || 'Oops , something went wrong');
  }

  toastrSuccess(err?) {
    this.toastr.success(err || 'Succesfully completed');
  }

  nextSlide() {
    //this.currentIndex++;
    if (this.medias.length - 1 > this.endPoint) {
      this.startPoint += 10;
      this.endPoint += 10;
      this.currentIndex = this.startPoint;
    }
    this.changeNavigation();
    this.getReactions();
  }

  prevSlide() {
    //this.currentIndex--;
    if (this.startPoint > 0) {
      this.startPoint -= 10;
      this.endPoint -= 10;
      this.currentIndex = this.endPoint-1;
    }
    this.changeNavigation();
    this.getReactions();
  }

  selectMedia(i, startPoint) {
    this.currentIndex = i + startPoint;
    this.changeNavigation();
    this.getReactions();
  }

  closeModal() {
    this.data.close();
    this.subscriptions.push(this.store.select(getOpenedModalRef).take(1).subscribe(res => res && res.close()));
  }

  changeNavigation() {
    this.router.navigate([this.url + this.medias[this.currentIndex].id]);
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

  likeComment(comment) {
    this.countryService.likeComment(this.medias[this.currentIndex].id, comment.id)
      .subscribe(res => res.liked ?
        this.commentLikedSuccess(comment) :
        this.commentRemoveLike(comment));
  }

  commentLikedSuccess(comment) {
    comment.likes.length++;
    this.toastrSuccess('Liked successfully added');
  }

  commentRemoveLike(comment) {
    comment.likes.length--;
    this.toastrError('Like  removed');
  }

  likedSuccess() {
    this.medias[this.currentIndex].reactions.likes.length++;
    this.toastrSuccess('Liked successfully added');
  }

  removeLike() {
    this.medias[this.currentIndex].reactions.likes.length--;
    this.toastrError('Like  removed');
  }

  addComment() {
    const commentModel = {
      comment: this.currentComment,
      user: {name: "hardcoded name"},
      reply_to: {
        id: this.replayTo.id,
        user: {
          name: this.replayTo.name
        }
      },
      created_at: new Date()
    };
    this.medias[this.currentIndex].reactions.comments.push(commentModel);
    this.currentComment = '';
    this.replayTo.id = 0;
  }

  ngOnDestroy() {

  }
}
