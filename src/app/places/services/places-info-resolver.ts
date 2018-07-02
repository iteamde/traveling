import {Injectable} from '@angular/core';
import {Resolve, Router, ActivatedRouteSnapshot} from '@angular/router';
import {Observable} from 'rxjs/Observable';

import {PlacesService} from './places.service';

import 'rxjs/add/observable/forkJoin';

@Injectable()
export class PlacesInfoResolver implements Resolve<any> {
  constructor(private placesService: PlacesService,
              private router: Router) {}

  resolve(route: ActivatedRouteSnapshot) {

    const placesId = route.paramMap.get('id');

    return Observable.forkJoin(
      this.placesService.getPlacesMedia(placesId),
      this.placesService.getPlacesInfo(placesId),
      this.placesService.getNumOfFollowers(placesId),
      this.placesService.getPlacesStats(placesId),
      this.placesService.getPlacesPlans(placesId),
      this.placesService.getDiscussions(placesId),
      this.placesService.getReviews(placesId),
      this.placesService.checkFollowStatus(placesId),
      this.placesService.nearby(placesId),
      this.placesService.checkFollowers(placesId)
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
      const places = {
        photo_count: res[0].data.media_count,
        media: res[0].data.medias,
        info: res[1].data,
        numOfFollowers: res[2].data.followers,
        stats: res[3].data.places_statistics,
        plans: res[4].data,
        discussions: res[5].data.discussions,
        reviews: res[6].data.place,
        followStatus: res[7].success,
        nearby: res[8].data,
        followers: res[9]
      };

      console.log(places)
      return places;
    });
  }
}
