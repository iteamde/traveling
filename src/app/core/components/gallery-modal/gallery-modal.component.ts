import {Component, Inject, OnDestroy, OnInit, ElementRef, ViewChild, AfterViewInit} from '@angular/core';
import {Router} from '@angular/router';
import {MAT_DIALOG_DATA} from '@angular/material';
import {Store} from '@ngrx/store';

import {CountryService} from '../../../country/services/country.service';
import {getOpenedModalRef, State} from '../../../core/reducers';

import {AutoUnsubscribe} from 'ngx-auto-unsubscribe';
import {ToastrService} from 'ngx-toastr';
import * as findIndex from 'lodash/findIndex';
import * as Hammer from 'hammerjs';

/**
 * Image gallery modal component
 * Contains image slider
 */
@AutoUnsubscribe({includeArrays: true})
@Component({
  selector: 'app-gallery-modal',
  templateUrl: './gallery-modal.component.html',
  styleUrls: ['./gallery-modal.component.scss']
})
export class GalleryModalComponent implements OnInit, AfterViewInit {
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
  public showMobileComment = false;
  private url: string;
  private subscriptions = [];
  private windowWidth: number;
  private imgQuantity = 10;

  /** reference to the img  html element */
  @ViewChild('img') img: ElementRef;
  /** reference to the imgGroup  html element */
  @ViewChild('imgGroup') imgGroup: ElementRef;

  constructor(@Inject(MAT_DIALOG_DATA) public data: any,
              private store: Store<State>,
              private countryService: CountryService,
              private toastr: ToastrService,
              private router: Router) {

    this.checkWindowWidth();
    this.medias = this.data.data;
    this.url = this.router.url.substr(0, this.router.url.lastIndexOf('/') + 1);
  }

  ngAfterViewInit() {
    /** Hammer -> for swiping img-sliders on mobile  devices */
     Hammer(this.img.nativeElement).on('swipeleft', () => {
       if (this.currentIndex < this.medias.length - 1) return this.nextSlide();
     });

     Hammer(this.img.nativeElement).on('swiperight', () => {
       if (this.currentIndex > 0) return this.prevSlide();
     });

     Hammer(this.imgGroup.nativeElement).on('swipeleft', () => {
       if (this.endPoint < this.medias.length - 1)  return this.nextPartOfSlide();
     });

     Hammer(this.imgGroup.nativeElement).on('swiperight', () => {
       if (this.startPoint > 0)  return this.prevPartOfSlide();
     });
  }

  ngOnInit() {
    this.currentIndex = findIndex(this.medias, {id: +this.data.params.mediaId});
    this.currentIndex = (this.currentIndex === -1) ? 0 : this.currentIndex;
    this.getReactions();
  }

  /**
   * Check window width
   */
  checkWindowWidth() {
    this.windowWidth = window.innerWidth;
    if (this.windowWidth <= 425) {
      this.endPoint = 2;
      this.imgQuantity = 2;
    }
  }

  /**
   * Set recipient
   * @param id
   * @param name
   */
  setReplyTo(id, name) {
    this.replayTo.id = id;
    this.replayTo.name = name;
  }

  /**
   * Send comment
   */
  sendComment() {
    this.countryService.sendComment(this.medias[this.currentIndex].id, this.currentComment, this.replayTo.id)
      .subscribe(res => res.status ? this.addComment(res.data.MediasCommentsId) : this.toastrError());
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
   * @param err
   */
  toastrSuccess(err?) {
    this.toastr.success(err || 'Succesfully completed');
  }

  // :TODO check gallery work without bugs

  /**
   * Show to next image
   */
  nextSlide() {
    this.currentIndex++;
    if (this.currentIndex % this.imgQuantity === 0) {
      this.nextPartOfSlide();
      return;
    }
    this.changeNavigation();
    this.getReactions();
  }
  /**
   * Show to previous image
   */
  prevSlide() {
    this.currentIndex--;
    if (this.currentIndex + 1 === this.startPoint) {
      this.prevPartOfSlide();
      return;
    }
    this.changeNavigation();
    this.getReactions();
  }
  /**
   * Show next portion of images
   */
  nextPartOfSlide() {
    // this.currentIndex++;
    if (this.medias.length - 1 > this.endPoint) {
      this.startPoint += this.imgQuantity;
      this.endPoint += this.imgQuantity;
      this.currentIndex = this.startPoint;
    }
    this.changeNavigation();
    this.getReactions();
  }
  /**
   * Show previous portion of images
   */
  prevPartOfSlide() {
    // this.currentIndex--;
    if (this.startPoint > 0) {
      this.startPoint -= this.imgQuantity;
      this.endPoint -= this.imgQuantity;
      this.currentIndex = this.endPoint - 1;
    }
    this.changeNavigation();
    this.getReactions();
  }

  /**
   * Select an image
   * @param i
   * @param startPoint
   */
  selectMedia(i, startPoint) {
    this.currentIndex = i + startPoint;
    this.changeNavigation();
    this.getReactions();
  }

  /**
   * Close modal gallery
   */
  closeModal() {
    this.data.close();
    this.subscriptions.push(this.store.select(getOpenedModalRef).take(1).subscribe(res => res && res.close()));
  }

  changeNavigation() {
    this.router.navigate([this.url + this.medias[this.currentIndex].id]);
  }

  /**
   * Get reactions (comments and likes) to current image
   */
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

  /**
   * Like current image
   */
  likeMedia() {
    this.countryService.likeMedia(this.medias[this.currentIndex].id)
      .subscribe(res => res.liked ? this.likedSuccess() : this.removeLike());
  }

  /**
   * Like current image comment
   */
  likeComment(comment) {
    this.countryService.likeComment(this.medias[this.currentIndex].id, comment.id)
      .subscribe(res => res.liked ?
        this.commentLikedSuccess(comment) :
        this.commentRemoveLike(comment));
  }

  /**
   * Increase comment likes
   * Show success notification
   */
  commentLikedSuccess(comment) {
    comment.likes.length++;
    this.toastrSuccess('Liked successfully added');
  }

  /**
   * Remove comment likes
   * Show warn notification
   * @param comment
   */
  commentRemoveLike(comment) {
    comment.likes.length--;
    this.toastrError('Like  removed');
  }

  /**
   * Increase current image likes
   * Show success notification
   */
  likedSuccess() {
    this.medias[this.currentIndex].reactions.likes.length++;
    this.toastrSuccess('Liked successfully added');
  }

  /**
   * Remove current image likes
   * Show warn notification
   */
  removeLike() {
    this.medias[this.currentIndex].reactions.likes.length--;
    this.toastrError('Like  removed');
  }

  /**
   * Add comment to current image
   * @param id
   */
  addComment(id) {
    const commentModel = {
      id: id,
      comment: this.currentComment,
      likes: [],
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
}
