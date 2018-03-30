import {Component, OnInit} from '@angular/core';
import { AmazingTimePickerService } from 'amazing-time-picker';
import {ActivatedRoute, Router} from '@angular/router';
import {AddCityToTripModalComponent} from '../../modals/add-city-to-trip-modal/add-city-to-trip-modal.component';
import {ModalManager} from '../../../core/services/modal-manager.service';
import {AddPlaceToTripModalComponent} from '../../modals/add-place-to-trip-modal/add-place-to-trip-modal.component';
import {ApiService} from '../../../core/services/api.service';
import {TripPlannerService} from '../../services/trip-planner.service';
import {IMyDpOptions} from 'mydatepicker';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ConfirmComponent} from '../../../core/components/modals/confirm/confirm.component';

@Component({
  selector: 'app-trip-planner-info',
  templateUrl: './trip-planner-info.component.html',
})
export class TripPlannerInfoComponent implements  OnInit{
  public tripData: Array<string> = ['Trip one TITLE', 'Trip two TITLE'];
  public data = {
    cities : [],
  };
  public today = new Date();
  public time = `${this.today.getHours()}:${this.today.getMinutes()}`;
  private routeParams: any;
  public dragOperation = false;
  public model: any = { date: { year: 2018, month: 10, day: 9 } };
  private isDragling = false;
  public showMessage = true;

  public myDatePickerOptions: IMyDpOptions = {
    dateFormat: 'dd mmm yyyy',
    width: '169px',
    height: '25px',
  };

  constructor(private atp: AmazingTimePickerService,
              private route: ActivatedRoute,
              private modalManager: ModalManager,
              private api: TripPlannerService,
              private router: Router,
  ){
            this.routeParams = this.route.snapshot.params;
  }

  ngOnInit() {
    setTimeout( () => this.showMessage = false , 5000);

    const dataFromBack = this.route.snapshot.data.placesInfo.data;
    console.log("DATA FROM SERVER", dataFromBack);
    if (dataFromBack.error) this.router.navigate(['/error']);

    //TODO REMOVE THIS WORST CODE EVER
    let cCity;

    dataFromBack.places.forEach((place) => {
      let flag = false;
       cCity = {
        country: {},
        places: [],
      };


      this.data.cities.forEach( (city) => {
          if (city.id === place.city.id) {
            flag = city.id;
          }
      });

      if (flag) {
        delete  place.city;
        delete  place.country;
        let flag2;
        this.data.cities.forEach( (c, i) => {
          if (flag === c.id)  flag2 = i + 1;
        });
        if(flag2) this.data.cities[flag2 - 1].places.push(place);

      } else {
        cCity = place.city;
        cCity.country = {};
        cCity.country = place.country;
        cCity.places = [];
        delete  place.city;
        delete  place.country;
        cCity.places.push(place);
        this.data.cities.push(cCity);
      }

    });

    console.log("Transformed data" , this.data.cities);
  }

  itemDragged(i) {
    console.log("DROP START" , i);
    this.isDragling = true;
  }
  itemSwapped(i) {
    console.log("DROP END" , i);
    this.isDragling = false;
  }


  open() {
    const amazingTimePicker = this.atp.open({
      time:  this.time,
      theme: 'dark',
      arrowStyle: {
        background: 'red',
        color: 'white'
      }
    });
    amazingTimePicker.afterClose().subscribe(time => {
      this.time = time;
    });
  }

  openCityModal() {
    this.modalManager.openModalFromLCH(AddCityToTripModalComponent, this.routeParams );
  }

  openPlaceModal() {
    this.modalManager.openModalFromLCH(AddPlaceToTripModalComponent, this.routeParams );
  }


  saveCity(city) {
    city.saved = true;
    return;
    /*console.log(this.routeParams.id , id);
    return this.api.saveCityInfo({city_id: id}, `trips/${this.routeParams.id}/finish_city`).subscribe(res => {});*/
  }

  removeCity(id) {
    this.data.cities.slice(id, 1);
   // return this.api.removeCityInfo({city_id: id}, `trips/${this.routeParams.id}/remove_city`).subscribe(res => {});
  }

  savePlace(id) {
    console.log(this.routeParams.id , id);
    return this.api.savePlaceInfo({place_id: id, date: '2001-03-10', time: '12:00' , duration: '12', budget: 250},
      `trips/${this.routeParams.id}/finish_place`).subscribe(res => {});
  }

  removePlace(id) {
    console.log(this.routeParams.id , id);
    return this.api.removePlaceInfo({place_id: id}, `trips/${this.routeParams.id}/remove_place`).subscribe(res => {});
  }

  publishTrip(id) {
    return this.api.publishTrip({}, `trips/${this.routeParams.id}/publish`).subscribe(res => {});
  }
  cancelTrip(id) {
    this.modalManager.openModalFromLCH(ConfirmComponent, this.routeParams );
    //return this.api.cancelTrip({}, `trips/${this.routeParams.id}/cancel`).subscribe(res => {});
  }

  setDragOperation(e) {
    if (this.isDragling) return;
    this.dragOperation = e;
  }
}