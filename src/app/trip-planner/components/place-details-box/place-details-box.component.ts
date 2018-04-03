import {Component, Input, OnInit} from '@angular/core';
import {AmazingTimePickerService} from 'amazing-time-picker';
import {IMyDpOptions} from 'mydatepicker';
import {
  DeletePlaceAction,
  SavePlaceAction
} from '../../actions/trip-planner.actions';
import {State} from '../../../core/reducers';
import {Store} from '@ngrx/store';

@Component({
  selector: 'app-place-details-box',
  templateUrl: './place-details-box.component.html',
  styleUrls: ['./place-details-box.component.scss']
})
export class PlaceDetailsBoxComponent implements OnInit {
  @Input() cities;
  @Input() trip_id;

  public today = new Date();
  public time = `${this.today.getHours()}:${this.today.getMinutes()}`;
  public myDatePickerOptions: IMyDpOptions = {
    dateFormat: 'yyyy-mm-dd',
    width: '169px',
    height: '25px',
  };
  constructor(private atp: AmazingTimePickerService,
              private store: Store<State>) { }

  ngOnInit() {
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


  savePlace(city, i, place, j) {
    city.places[j] = place;
    city.hasSavedPlace = city.hasSavedPlace ? city.hasSavedPlace + 1 :  1;
    place.saved = true;
    place.pivot.duration = (place.pivot.hour || 0) + ' hours ' + (place.pivot.minute || 0) + ' min ';
    const dur = (place.pivot.hour || 0) * 60 + (place.pivot.minute || 0);

    return this.store.dispatch(
      new SavePlaceAction( {
        helper: {item: city, index: i},
        data: {place_id: place.id, date: place.pivot.date.formatted, time : this.time, duration: dur, budget: +place.pivot.budget},
        url: `trips/${this.trip_id}/finish_place`
      })
    );
  }

  removePlace(city, i, place, j) {
    city.places.splice(j, 1);
    return this.store.dispatch(
      new DeletePlaceAction( {
        helper: {item: city, index: i},
        data: {place_id: place.id, },
        url: `trips/${this.trip_id}/remove_place`
      })
    );
  }

}
