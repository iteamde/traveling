import {Injectable} from '@angular/core';
import {Resolve, Router} from '@angular/router';
import {ActivatedRouteSnapshot} from '@angular/router';
import {CountryService} from './country.service';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/forkJoin';


@Injectable()
export class CountryInfoResolver implements Resolve<any> {
  constructor(private countryService: CountryService,
              private router: Router) {
  }

  resolve(route: ActivatedRouteSnapshot) {
    const countryId = route.paramMap.get('id');

    switch (route.paramMap.get('type')) {

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

      res.forEach((item) => {
        if (item.data && item.data.error === 400) return this.router.navigate(['/error']);
      })

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
