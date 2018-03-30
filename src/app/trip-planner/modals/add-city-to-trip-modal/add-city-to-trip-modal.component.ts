import {Component, OnInit, OnDestroy, Inject} from '@angular/core';
import {Store} from '@ngrx/store';
import {State, getTripId, getErrorFromServer} from '../../../core/reducers/index';
import {FormBuilder, FormGroup} from '@angular/forms';
import {AddCityAction} from '../../actions/trip-planner.actions';
import {Subscription} from 'rxjs/Subscription';
import {TripPlannerService} from '../../services/trip-planner.service';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/debounceTime';
import {MAT_DIALOG_DATA} from '@angular/material';
import {Router} from '@angular/router';



@Component({
  selector: 'app-add-city-to-trip-modal',
  templateUrl: 'add-city-to-trip-modal.component.html',
  styleUrls: ['add-city-to-trip-modal.component.scss']
})
export class AddCityToTripModalComponent implements OnInit, OnDestroy {
  public trip_id: number;

  public closeLink: string;

  /**
   * Trip planner error
   */
  public error$: Observable<string>;

  /**
   * Cities data holder
   */
  public cities = [];

  /**
   * Subscription
   */
  private searchCitySubscription$: Subscription;
  /**
   * Holds city name
   */
  public cityForm: FormGroup;

  /**
   * Default constructor
   * @param store
   * @param fb
   * @param tripPlannerService
   */
  constructor(private store: Store<State>,
              private fb: FormBuilder,
              private tripPlannerService: TripPlannerService,
              @Inject(MAT_DIALOG_DATA) public routeParams: any,
              private route: Router
              )
  {
    this.closeLink = this.route.routerState.snapshot.url.endsWith('info') ? this.route.routerState.snapshot.url : 'trip/new';
    this.error$ = store.select(getErrorFromServer);
  }

  ngOnInit() {
    this.cityForm = this.fb.group({
      city: ''
    });

    this.searchCitySubscription$ = this.cityForm.valueChanges
      .debounceTime(500)
      .switchMap(form => this.tripPlannerService.getCities(form.city))
      .subscribe(res => this.cities = JSON.parse(res.data));
  }

  /**
   * Next step button clicked
   */
  onAddClick(id) {
        this.store.dispatch(new AddCityAction(this.routeParams.id, {city_id : id, order : 1}, `/trip/${this.routeParams.id}/places` ));
  }

  ngOnDestroy() {
    this.searchCitySubscription$.unsubscribe();
  }

}
