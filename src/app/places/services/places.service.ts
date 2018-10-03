import { Injectable } from '@angular/core';
import { Router} from '@angular/router';

import {ApiService} from '../../core/services/api.service';

import {Observable} from 'rxjs/Observable';

@Injectable()
export class PlacesService {

  constructor(
    private api: ApiService,
    private router: Router) {
  }

  /**
   * Get places info
   */
  getPlacesInfo(placesId): Observable<any> {
    return this.api.get(  `places/${placesId}?language_id=1`);
  }

  /**
   * Get number of followers
   */
  getNumOfFollowers(placesId): Observable<any> {
    return this.api.get(  `places/${placesId}/num_followers?language_id=1`);
  }

  /**
   * Get places statistic
   */
  getPlacesStats(placesId): Observable<any> {
    return this.api.get(  `places/${placesId}/stats?language_id=1`);
  }

  /**
   * Get places media
   */
  getPlacesMedia(placesId): Observable<any> {
    return this.api.get(  `places/${placesId}/media?language_id=1`);
  }

  /**
   * Get places trip plans
   */
  getPlacesPlans(placesId): Observable<any> {
    return this.api.get(  `places/${placesId}/plans?language_id=1`);
  }

  /**
   * Get discussions
   */
  getDiscussions(placesId): Observable<any> {
    return this.api.get(  `places/${placesId}/discussions?language_id=1`);
  }

  /**
   * Get reviews
   */
  getReviews(placesId): Observable<any> {
    return this.api.get(  `places/${placesId}/reviews?language_id=1`);
  }

  /**
   * Post nearby
   */
  nearby(placesId): Observable<any> {
    return this.api.post(  `places/${placesId}/nearby?language_id=1`,{});
  }

  /**
   * Follow places
   */
  followPlaces(placesId): Observable<any> {
    return this.api.post(  `places/${placesId}/follow?language_id=1`, {});
  }

  /**
   * Unfollow places
   */
  unfollowPlaces(placesId): Observable<any> {
    return this.api.post(  `places/${placesId}/unfollow?language_id=1`, {});
  }

  /**
   * Check follow  status places
   */
  checkFollowStatus(placesId): Observable<any> {
    return this.api.post(  `places/${placesId}/checkfollow?language_id=1`, {});
  }

  /**
   * Share place
   */
  sharePlace(placesId): Observable<any> {
    return this.api.post(  `places/${placesId}/share?language_id=1`, {});
  }

  /**
   * Post review
   */
  postReview(placesId, comment, user_id, score): Observable<any> {
    return this.api.post(  `places/${placesId}/review?language_id=1`,{comment, user_id, score});
  }

  /**
   * Check place followers
   */
  checkFollowers(placesId): Observable<any> {
    return this.api.post(  `places/${placesId}/followers?language_id=1`, {});
  }

  /**
   * Get trending places
   */
  getTrendingPlaces(countryId): Observable<any> {
    return this.api.get(  `countries/${countryId}/places?language_id=1`);
  }

  /**
   * Get country media
   */
  getCountryMedia(countryId): Observable<any> {
    return this.api.get(  `countries/${countryId}/media?language_id=1`);
  }

  /**
   * Get country info
   */
  getCountryInfo(countryId): Observable<any> {
    return this.api.get(  `countries/${countryId}?language_id=1`);
  }
  /**
   * Check follow  status country
   */
  checkCountryFollowStatus(countryId): Observable<any> {
    return this.api.post(  `countries/${countryId}/checkfollow?language_id=1`, {});
  }

  /**
   * Get number of followers
   */
  getCountryNumOfFollowers(countryId): Observable<any> {
    return this.api.get(  `countries/${countryId}/num_followers?language_id=1`);
  }

  /**
   * Get country info  of the place
   */
  getCountryOfPlace(countryId) {
    return Observable.forkJoin(
      this.getCountryMedia(countryId),
      this.getCountryInfo(countryId),
      this.checkCountryFollowStatus(countryId),
      this.getCountryNumOfFollowers(countryId),
      this.getTrendingPlaces(countryId)
    ).map(res => {
      /**
       * If at least one of the items in array has an error === 400 -> navigate to error page
       */
      res.forEach((item) => {
        if (item.data && item.data.error === 400) return this.router.navigate(['/error']);
      })

      /**
       * Join multiply responses from server into one object
       */
      const countryInfo = {
        media: res[0].data.medias,
        info: res[1].data,
        followStatus: res[2].success,
        numOfFollowers: res[3].data.followers,
        trendingPlaces: res[4].data
      };
      return countryInfo;
    });
  }
}








