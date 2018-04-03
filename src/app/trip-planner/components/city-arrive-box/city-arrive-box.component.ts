import {Component, Input, OnInit} from '@angular/core';
import { State} from '../../../core/reducers';
import {Store} from '@ngrx/store';
import {DeleteCityAction, SaveCityAction, SetActiveCityAction} from '../../actions/trip-planner.actions';

@Component({
  selector: 'app-city-arrive-box',
  templateUrl: './city-arrive-box.component.html',
  styleUrls: ['./city-arrive-box.component.scss']
})
export class CityArriveBoxComponent implements OnInit {
  @Input() cities;
  @Input() trip_id;
  constructor( private store: Store<State>) {
  }

  ngOnInit() {
  }

  saveCity(city, index) {
    return this.store.dispatch(
      new SaveCityAction( {
        helper: {property: 'saved', value: true, index: index},
        data: {city_id: city.id, transportation: city.transportation },
        url: `trips/${this.trip_id}/finish_city`
      })
    );
  }

  removeCity(city , index) {
    return this.store.dispatch(
      new DeleteCityAction( {
        helper: {index: index},
        data: {city_id: city.id, },
        url: `trips/${this.trip_id}/remove_city`
      })
    );
  }

  setActiveCity(city) {
    return this.store.dispatch(
      new SetActiveCityAction(city)
    );
  }

}
