import {Component, Input} from '@angular/core';
import {LatLngBounds} from '@agm/core';
import {getCitiesInfo, State} from '../../../core/reducers';
import {Store} from '@ngrx/store';
import {AutoUnsubscribe} from 'ngx-auto-unsubscribe';
declare var google: any;

@AutoUnsubscribe()
@Component({
  selector: 'app-trip-planner-map',
  templateUrl: './trip-planner-map.component.html',
  styleUrls: ['./trip-planner-map.component.scss']
})
export class TripPlannerMapComponent {
  @Input() cities;
  public storeMap;
  public currentLocation = {
    lat : 0,
    lng: 0
  };

  public directionOptions = {
    markerOptions: {
      icon: 'https://maps.gstatic.com/mapfiles/api-3/images/spotlight-poi.png',
    },
  };

  public transportationTable = {
    plane: 'PLANE',
    car: 'DRIVING',
    train: 'TRANSIT',
    bus: 'TRANSIT',
    cycle: 'BICYCLING',
    walk: 'WALKING',
    ship: 'SHIP'
  };
  constructor( private store: Store<State>) {
    this.store.select(getCitiesInfo).subscribe( res => {
      if(this.storeMap) this.storeMap.fitBounds(this.findStoresBounds());
    });
  }

  isModeAllowed(transportation) {
    if(!transportation) return false;
    return !['PLANE', 'SHIP'].includes(this.transportationTable[transportation]);
  }

  getTravelMode(transportation) {
    return this.transportationTable[transportation];
  }

  dirChange(event){
    console.log("DIRCHANGE!!!", event);
  }

  // AGM MAP CENTER HELPER
  storeMapReady(map) {
    this.storeMap = map;
    if (navigator)
      {
        navigator.geolocation.getCurrentPosition( pos => {

          /**
           * Get current geo-position. Example: lat:30.608178799999997, lng:50.452959199999995
           */
          this.currentLocation.lng = +pos.coords.longitude;
          this.currentLocation.lat = +pos.coords.latitude;
          this.storeMap.fitBounds(this.findStoresBounds());
        });
      }
    this.storeMap.fitBounds(this.findStoresBounds());
  }

  public findStoresBounds(){
    const bounds: LatLngBounds = new google.maps.LatLngBounds();

    this.cities.forEach(city => {
      city.places.forEach( place => bounds.extend(new google.maps.LatLng(place.lat, place.lng)));
    });

    if (this.currentLocation.lat && this.currentLocation.lng){
      bounds.extend(new google.maps.LatLng(this.currentLocation.lat, this.currentLocation.lng));
    }
    return bounds;
  }
}
