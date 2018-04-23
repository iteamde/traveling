import { Injectable } from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {ApiService} from '../../core/services/api.service';

@Injectable()
export class CountryService {

  constructor(
    private api: ApiService
  ) {}

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
   * Get number of followers
   */
  getNumOfFollowers(countryId): Observable<any> {
    return this.api.get(  `countries/${countryId}/num_followers?language_id=1`);
  }

  /**
   * Get country statistic
   */
  getCountryStats(countryId): Observable<any> {
    return this.api.get(  `countries/${countryId}/stats?language_id=1`);
  }

  /**
   * Get country trip plans
   */
  getCountryPlans(countryId): Observable<any> {
    return this.api.get(  `countries/${countryId}/plans?language_id=1`);
  }

  /**
   * Get country trip last places photo
   */
  getCountryPlaces(countryId): Observable<any> {
    return this.api.get(  `countries/${countryId}/places?language_id=1`);
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
    return this.api.post(  `countries/${countryId}/follow?language_id=1`, {});
  }

  /**
   * Check follow  status country
   */
  checkFollowStatus(countryId): Observable<any> {
    return this.api.post(  `countries/${countryId}/checkfollow?language_id=1`, {});
  }

  /**
   * Report media
   */
  reportMedia(mediaId): Observable<any> {
    return this.api.post(  `medias/${mediaId}/report?language_id=1`, {});
  }

  /**
   * Report media
   */
  likeMedia(mediaId): Observable<any> {
    return this.api.post(  `medias/${mediaId}/like?language_id=1`, {});
  }

  /**
   * Report media
   */
  sendComment(mediaId, comment): Observable<any> {
    return this.api.post(  `medias/${mediaId}/comment?language_id=1`, {comment: comment});
  }

}
