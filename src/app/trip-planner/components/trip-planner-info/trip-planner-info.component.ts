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
import {getOpenedModalRef, State} from '../../../core/reducers';
import {Store} from '@ngrx/store';

@Component({
  selector: 'app-trip-planner-info',
  styleUrls: ['./trip-planner-info.component.scss'],
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
  public activeCity;
  private modalRef$;


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
              private store: Store<State>
  ){
            this.routeParams = this.route.snapshot.params;
    this.modalRef$ = this.store.select(getOpenedModalRef);
  }

  ngOnInit() {
    this.modalRef$.subscribe(res => {
      if (res) {
        res.afterClosed().take(1).subscribe(res1 => {

          console.log("Resss 111" , res1);
          if (res1 && res1.cId) {
           this.data.cities.push({
             id: res1.cId,
             trans: [{title: res1.title}],
             places: []
           });
            this.activeCity = this.data.cities[this.data.cities.length - 1];
          }

          if (res1 && res1.id && !res1.cId) {
            this.activeCity.places.push({
              id: res1.id,
              trans: [{title: res1.name}],
              pivot: {}
            });
          }
        });
        console.log("Cities 111" , this.data.cities);
      }
    });

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
    this.activeCity = this.data.cities[0];
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


  open(x) {
    const amazingTimePicker = this.atp.open({
      time:  this.time,
      theme: 'dark',
      arrowStyle: {
        background: 'red',
        color: 'white'
      }
    });
    amazingTimePicker.afterClose().subscribe(time => {
      x.time = time;
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
    this.data.cities.splice(id, 1);
    if (this.data.cities.length) {
      this.activeCity = this.data.cities[0]
    }
   // return this.api.removeCityInfo({city_id: id}, `trips/${this.routeParams.id}/remove_city`).subscribe(res => {});
  }

  savePlace(city, place, j) {
    city.places[j] = place;
    city.hasSavedPlace = city.hasSavedPlace ? city.hasSavedPlace + 1 :  1;
    place.saved = true;
    place.pivot.duration = (place.pivot.hour || 0) + ' hours ' + (place.pivot.minute || 0) + ' min ';
    console.log("ITS CITY ", city, place);

   // return this.api.savePlaceInfo({place_id: id, date: '2001-03-10', time: '12:00' , duration: '12', budget: 250},
    //  `trips/${this.routeParams.id}/finish_place`).subscribe(res => {});
  }

  removePlace(city, j) {
    city.places.splice(j, 1);
   // return this.api.removePlaceInfo({place_id: id}, `trips/${this.routeParams.id}/remove_place`).subscribe(res => {});
  }

  publishTrip(id) {
    //return this.api.publishTrip({}, `trips/${this.routeParams.id}/publish`).subscribe(res => {});
  }
  cancelTrip(id) {
    this.modalManager.openModalFromLCH(ConfirmComponent, this.routeParams );
    // return this.api.cancelTrip({}, `trips/${this.routeParams.id}/cancel`).subscribe(res => {});
  }
  setDragOperation(e) {
    if (this.isDragling) return;
    this.dragOperation = e;
  }

  getLat() {
    return +this.activeCity.places[0].lat
  }

  getLng() {
    return +this.activeCity.places[0].lng
  }

  setActiveCity(x) {
    this.activeCity = x;
  }
}
