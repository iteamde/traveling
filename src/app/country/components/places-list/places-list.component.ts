import {Component, Input, OnInit} from '@angular/core';
import {Store} from '@ngrx/store';
import {getCountryPlaces, State} from '../../../core/reducers';

@Component({
  selector: 'app-places-list',
  templateUrl: './places-list.component.html',
  styleUrls: ['./places-list.component.scss']
})
export class PlacesListComponent implements OnInit {
  public data: any;
  constructor(private store: Store<State>) {
    this.data = this.store.select(getCountryPlaces);
  }

  ngOnInit() {
  }

}
