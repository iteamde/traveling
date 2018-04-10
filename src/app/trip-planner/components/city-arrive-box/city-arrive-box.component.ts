import {Component, Input, OnInit} from '@angular/core';
import { State} from '../../../core/reducers';
import {Store} from '@ngrx/store';
import {DeleteCityAction, SaveCityAction, SetActiveCityAction} from '../../actions/trip-planner.actions';
import {ToastrService} from 'ngx-toastr';

@Component({
  selector: 'app-city-arrive-box',
  templateUrl: './city-arrive-box.component.html',
  styleUrls: ['./city-arrive-box.component.scss']
})
export class CityArriveBoxComponent implements OnInit {
  @Input() cities;
  @Input() trip_id;

  constructor( private store: Store<State>, private toastr: ToastrService) {
  }

  ngOnInit() {
  }

  saveCity(city, index) {
    if (!city.places.length) return this.toastr.error('Please add a place before save');
    
    const payload = {
      helper: {property: 'saved', value: true, index: index},
      data: {city_id: city.id, transportation: city.transportation },
      url: `trips/${this.trip_id}/finish_city`
    };

    return this.store.dispatch(new SaveCityAction(payload));
  }

  removeCity(city , index) {
    const payload = {
      helper: {index: index},
      data: {city_id: city.id, },
      url: `trips/${this.trip_id}/remove_city`
    };
    return this.store.dispatch(new DeleteCityAction(payload));
  }

  setActiveCity(city) {
    return this.store.dispatch(new SetActiveCityAction(city));
  }

}
