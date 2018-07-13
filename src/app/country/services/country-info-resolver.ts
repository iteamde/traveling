import {Injectable} from '@angular/core';
import {Resolve, Router, ActivatedRouteSnapshot} from '@angular/router';
import {Observable} from 'rxjs/Observable';

import {CountryService} from './country.service';

import 'rxjs/add/observable/forkJoin';


@Injectable()
export class CountryInfoResolver implements Resolve<any> {
  constructor(private countryService: CountryService,
              private router: Router) {
  }

  resolve(route: ActivatedRouteSnapshot) {

    const countryId = route.paramMap.get('id');

    switch (route.parent.url[0].path) {

      case 'city':
        this.countryService.setType('cities');
        break;

      case 'country':
        this.countryService.setType('countries');
        break;

      default:
        return this.router.navigate(['/error']);

    }

    return Observable.forkJoin(
      this.countryService.getCountryMedia(countryId),
      this.countryService.getCountryInfo(countryId),
      this.countryService.getNumOfFollowers(countryId),
      this.countryService.getCountryStats(countryId),
      this.countryService.getCountryPlans(countryId),
      this.countryService.getCountryPlaces(countryId),
      this.countryService.checkFollowStatus(countryId)
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
      const country = {
        media: res[0].data.medias,
        info: res[1].data,
        numOfFollowers: res[2].data.followers,
        stats: res[3].data.stats,
        plans: res[4].data.plans,
        places: res[5].data.places,
        followStatus: res[6].success
      };

      return country;
    });
  }
}
