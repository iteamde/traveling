import {Component, Input, OnInit} from '@angular/core';
import {ApiService} from '../../../core/services/api.service';

@Component({
  selector: 'app-completed-place-box',
  templateUrl: './completed-place-box.component.html',
  styleUrls: ['./completed-place-box.component.scss']
})
export class CompletedPlaceBoxComponent implements OnInit {
  @Input() cities;
  @Input() trip_id;
  public dragOperation = false;
  private isDragling = false;

  constructor(private api: ApiService) { }

  ngOnInit() {
  }


  setDragOperation(e) {
    if (this.isDragling) return;
    this.dragOperation = e;
  }

  itemDragged() {
    this.isDragling = true;
  }

  itemSwapped(places) {
    this.isDragling = false;
    let order = [];
    places.forEach( (place, index) => order.push({place_id: place.id, order: index}));
    this.api.post( `trips/${this.trip_id}/places_order`, {order: order}).subscribe();
  }

}
