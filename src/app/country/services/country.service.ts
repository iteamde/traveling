import { Injectable } from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {ApiService} from '../../core/services/api.service';
import {ActivatedRoute, Router} from '@angular/router';






@Injectable()
export class CountryService {
  private type: string;

  constructor(
    private api: ApiService,
    private route: Router,
    private activatedRoute: ActivatedRoute

  ) {
    console.log('router', this.route);
  }
  setType(type) {
    return this.type = type;
  }

  getType() {
    return this.type;
  }


  /**
   * Get country media
   */
  getCountryMedia(countryId): Observable<any> {
    return this.api.get(  `${this.type}/${countryId}/media?language_id=1`);
  }

  /**
   * Get country info
   */
  getCountryInfo(countryId): Observable<any> {
    return this.api.get(  `${this.type}/${countryId}?language_id=1`);
  }

  /**
   * Get number of followers
   */
  getNumOfFollowers(countryId): Observable<any> {
    return this.api.get(  `${this.type}/${countryId}/num_followers?language_id=1`);
  }

  /**
   * Get country statistic
   */
  getCountryStats(countryId): Observable<any> {
    return this.api.get(  `${this.type}/${countryId}/stats?language_id=1`);
  }

  /**
   * Get country trip plans
   */
  getCountryPlans(countryId): Observable<any> {
    return this.api.get(  `${this.type}/${countryId}/plans?language_id=1`);
  }

  /**
   * Get country trip last places photo
   */
  getCountryPlaces(countryId): Observable<any> {
    return this.api.get(  `${this.type}/${countryId}/places?language_id=1`);
  }

  /**
   * Get reactions to media
   */
  getReactions(mediaId): Observable<any> {
    return this.api.post(  `medias/${mediaId}/reactions?language_id=1`, {});
  }

  /**
   * Follow country
   */
  followCountry(countryId): Observable<any> {
    return this.api.post(  `${this.type}/${countryId}/follow?language_id=1`, {});
  }

  /**
   * Unfollow country
   */
  unfollowCountry(countryId): Observable<any> {
    return this.api.post(  `${this.type}/${countryId}/unfollow?language_id=1`, {});
  }

  /**
   * Check follow  status country
   */
  checkFollowStatus(countryId): Observable<any> {
    return this.api.post(  `${this.type}/${countryId}/checkfollow?language_id=1`, {});
  }

  /**
   * Report media
   */
  reportMedia(mediaId): Observable<any> {
    return this.api.post(  `medias/${mediaId}/report?language_id=1`, {});
  }

  /**
   * Like media
   */
  likeMedia(mediaId): Observable<any> {
    return this.api.post(  `medias/${mediaId}/like?language_id=1`, {});
  }

  /**
   * Like comment
   */
  likeComment(mediaId, commentId): Observable<any> {
    return this.api.post(  `medias/${mediaId}/${commentId}/like?language_id=1`, {});
  }

  /**
   * Report media
   */
  sendComment(mediaId, comment, reply_to?): Observable<any> {
    return this.api.post(  `medias/${mediaId}/comment?language_id=1`, {comment, reply_to});
  }

}
