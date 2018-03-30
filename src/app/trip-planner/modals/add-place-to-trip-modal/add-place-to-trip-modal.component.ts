import {Component, Inject, OnDestroy, OnInit} from '@angular/core';
import {FormGroup, FormBuilder} from '@angular/forms';
import {Store} from '@ngrx/store';
import {State} from '../../../core/reducers/index';
import {AddPlaceAction} from '../../actions/trip-planner.actions';
import {Observable} from 'rxjs';
import {Subscription} from 'rxjs/Subscription';
import {TripPlannerService} from '../../services/trip-planner.service';
import {getErrorFromServer, getOpenedModalRef} from '../../../core/reducers';
import {MAT_DIALOG_DATA} from '@angular/material';
import {Router} from '@angular/router';

@Component({
  selector: 'app-add-place-to-trip-modal',
  templateUrl: './add-place-to-trip-modal.component.html',
  styleUrls: ['add-place-to-trip-modal.component.scss']
})
export class AddPlaceToTripModalComponent implements OnInit, OnDestroy {

  public trip_id: number;
  public closeLink: string;

  public searchPlaceSubscription$: Subscription;

  public places = [];

  /**
   * Trip planner error
   */
  public error$: Observable<string>;
  public modalRef$: Observable<any>;

  /**
   * Holds trip data
   */
  public form: FormGroup;

  /**
   * Default constructor
   * @param store
   * @param fb
   */
  constructor(private store: Store<State>, private fb: FormBuilder,
              private tripPlannerService: TripPlannerService,
              @Inject(MAT_DIALOG_DATA) public routeParams: any,
              private route: Router) {
    this.closeLink = this.route.routerState.snapshot.url.endsWith('info') ? this.route.routerState.snapshot.url : 'trip/new';

  }

  ngOnInit() {
    this.error$ = this.store.select(getErrorFromServer);
    this.modalRef$ = this.store.select(getOpenedModalRef);
    this.form = this.fb.group({
      place: '',
    });

    this.searchPlaceSubscription$ = this.form.valueChanges
      .debounceTime(500)
      .switchMap(form => this.tripPlannerService.getPlaces(form.place))
      .subscribe(res => this.places = res.data.places);
  }

  /**
   * Add button clicked
   */
  onAddClick(place) {
    if(this.route.routerState.snapshot.url.endsWith('info')){
      this.modalRef$.take(1).subscribe(res => res.close(place));
      return;
    }
     this.store.dispatch(new AddPlaceAction( this.routeParams.id, {place_id : place.id}, `/trip/${this.routeParams.id}/info`));
  }

  ngOnDestroy() {
    this.searchPlaceSubscription$.unsubscribe();
  }
}
