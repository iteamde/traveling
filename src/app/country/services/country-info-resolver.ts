import { Injectable } from '@angular/core';
import {Resolve} from '@angular/router';
import { ActivatedRouteSnapshot } from '@angular/router';
import {CountryService} from './country.service';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/forkJoin';


@Injectable()
export class CountryInfoResolver implements Resolve<any> {
  constructor(private countryService: CountryService ) {}

  resolve(route: ActivatedRouteSnapshot) {
    const countryId = route.paramMap.get('id');
    return Observable.forkJoin(
      this.countryService.getCountryMedia(countryId),
      this.countryService.getCountryInfo(countryId),
      this.countryService.getNumOfFollowers(countryId),
      this.countryService.getCountryStats(countryId),
      this.countryService.getCountryPlans(countryId),
      this.countryService.getCountryPlaces(countryId),
      this.countryService.checkFollowStatus(countryId)
    ).map(res => {
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
