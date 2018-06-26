import {Component, OnInit} from '@angular/core';
import {Store} from '@ngrx/store';
import {getCountryPlaces, getCountryStats, State} from '../../../core/reducers';
import {Router} from '@angular/router';

@Component({
  selector: 'app-places-list',
  templateUrl: './places-list.component.html',
  styleUrls: ['./places-list.component.scss']
})
export class PlacesListComponent implements OnInit {
  public data: any;
  public stats: any;

  constructor(private store: Store<State>,
              private router: Router) {
    this.data = this.store.select(getCountryPlaces);
    this.stats = this.store.select(getCountryStats);
  }

  ngOnInit() {
    // this.data.subscribe(res => console.log('PlacesList', res))
  }

  navigateToPlace(id) {
    if(id) this.router.navigate(['/places/', id]);

  }
}
