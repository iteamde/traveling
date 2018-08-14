import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {AddCityToTripModalComponent} from '../../modals/add-city-to-trip-modal/add-city-to-trip-modal.component';
import {ModalManager} from '../../../core/services/modal-manager.service';
import {AddPlaceToTripModalComponent} from '../../modals/add-place-to-trip-modal/add-place-to-trip-modal.component';
import {ConfirmComponent} from '../../../core/components/modals/confirm/confirm.component';
import {getCitiesInfo, State, getAlreadySpent} from '../../../core/reducers';
import {Store} from '@ngrx/store';
import {CancelTripAction, SaveTripAction, SetCityInfoAction} from '../../actions/trip-planner.actions';
import {AutoUnsubscribe} from 'ngx-auto-unsubscribe';


@AutoUnsubscribe()
@Component({
  selector: 'app-trip-planner-info',
  styleUrls: ['./trip-planner-info.component.scss'],
  templateUrl: './trip-planner-info.component.html',
})
export class TripPlannerInfoComponent implements  OnInit, OnDestroy {
  public data = {
    cities : [],
  };
  public routeParams: any;
  public showMessage = true;
  public activeCity;
  public citiesInfo$;
  public alreadySpent$;



  constructor(private route: ActivatedRoute,
              private modalManager: ModalManager,
              private router: Router,
              private store: Store<State>
  ){
            this.routeParams = this.route.snapshot.params;
            this.citiesInfo$ = this.store.select(getCitiesInfo);
            this.alreadySpent$ = this.store.select(getAlreadySpent);

  }

  ngOnInit() {
    setTimeout( () => this.showMessage = false , 5000);

    const dataFromBack = this.route.snapshot.data.placesInfo.data;
    if (dataFromBack.error) return this.router.navigate(['/error']);
    // TODO REMOVE THIS WORST CODE EVER
    this.transformBackendData(dataFromBack);


    this.store.dispatch(new SetCityInfoAction({cities: this.data.cities , activeCity: this.data.cities[0]}));


    this.citiesInfo$.subscribe( res => {
      this.data.cities = res.cities;
      console.log("It`s city info", res);
    });
  }


  openCityModal() {
    this.modalManager.openModalFromLCH(AddCityToTripModalComponent, this.routeParams );
  }

  openPlaceModal() {
    this.modalManager.openModalFromLCH(AddPlaceToTripModalComponent, this.routeParams );
  }

  publishTrip(id) {
    this.store.dispatch(new SaveTripAction({details: {}, url: `trips/${this.routeParams.id}/publish`}));
  }

  cancelTrip() {
    const data = {
      title : 'Are you sure you want to cancel your Trip Plan?' ,
      onSuccess: this.cancel.bind(this),
      onReject: false
    };
    this.modalManager.openModalFromLCH(ConfirmComponent, data);
  }
  cancel() {
    this.store.dispatch(new CancelTripAction({details: {}, url: `trips/${this.routeParams.id}/cancel`}));
  }


  transformBackendData(dataFromBack) {
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
  }

  ngOnDestroy() {
  }
}
