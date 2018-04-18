import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {CountryService} from './services/country.service';

@Component({
  selector: 'app-country',
  templateUrl: './country.component.html',
  styleUrls: ['./country.component.scss']
})
export class CountryComponent implements OnInit {
  public data;
  public countryMediaData;
  public plansMediaData;
  public placesMediaData;

  constructor (private route: ActivatedRoute,
               private countryService: CountryService) {
    this.data = this.route.snapshot.data.country;
    console.log("COUNTRY INFO", this.data);
  }

  ngOnInit() {

    //FILL DATA FOR  BOX GALLERY WRAPPERs
    this.countryMediaData = {
      title: 'Photos',
      count: this.data.stats.medias,
      media: this.data.media
    };

    this.plansMediaData = {
      title: 'Trip plans',
      count: this.data.stats.trips,
      media: this.data.plans.slice(0, 3).map(res => new Object({url: res.thumb})),
    };

    this.placesMediaData = {
      title: 'Best places',
      count: this.data.stats.places,
      media: this.data.places.slice(0, 3).map(res => new Object({url: res.medias[0] && res.medias[0].url}))
    };



  }

  followCountry() {
      this.countryService.followCountry( this.data.info.id).subscribe( res => {
        if (res.success) {
          this.data.stats.followers++;
        }
      });
  }
}
