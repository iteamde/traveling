import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';

import {ApiService} from '../../../core/services/api.service';
import {RegisterAction} from '../../actions/auth.actions';
import {getLoggedUser, State} from '../../../core/reducers';

import {ScrollEvent} from 'ngx-scroll-event';
import {Store} from '@ngrx/store';
import {Observable} from 'rxjs/Observable';
import {Subscription} from 'rxjs/Subscription';
import 'rxjs/add/operator/debounceTime';

/**
 * Search component to select favorite country,
 * city or place while take the registration
 */
@Component({
  selector: 'app-search-box',
  templateUrl: './search-box.component.html',
  styleUrls: ['./search-box.component.scss']
})
export class SearchBoxComponent implements OnInit , OnDestroy{
  protected user$: Observable<any>;
  public items: Array<any> = [];
  public choosenItems: Array<any> = [];
  public itemToChoose = 5;
  private  limit = 20;
  private  offset = 0;
  private searchItemSubscription$: Subscription;
  public form: FormGroup;
  /** list of settings */
  @Input() settings: any;

  constructor(private apiService: ApiService,
              private store: Store<State>,
              private fb: FormBuilder) {
    this.user$ = store.select(getLoggedUser);
  }

  ngOnInit() {
    this.form = this.fb.group({
      query: ''
    });

    this.searchItemSubscription$ = this.form.valueChanges
      .debounceTime(500)
      .subscribe(res => this.getItems(false));
    this.getItems(false);
  }

  ngOnDestroy() {
    this.searchItemSubscription$.unsubscribe();
  }

  /**
   * Select favorite city or place
   * @param item
   */
  selectItem(item) {
    item.selected = !item.selected;

    if ( item.selected ) {
      this.choosenItems.push(item);
      // this.items.forEach( (elem, index) => {
      //   if ( item.id === elem.id) {
      //     return this.items.splice(index, 1);
      //   }
      // });
    } else {
      this.choosenItems.forEach( (elem, index) => {
        if ( item.id === elem.id) {
          return this.choosenItems.splice(index, 1);
        }
      });
    }
  }

  /**
   * Handle scroll event to get more items (infinity scroll)
   * @param {ScrollEvent} event
   */
  public handleScroll(event: ScrollEvent) {
    if (event.isReachingBottom) {
      this.offset += this.limit;
      this.getItems(true);
    }
  }

  /**
   * Get more items (cities or places)
   * @param fromScrollEvent
   */
  private getItems(fromScrollEvent) {
    const details = {
      query: this.form.get('query').value,
      limit: this.limit,
      offset: this.offset,
      language_id: 1
    };

    this.apiService.post(this.settings.getDataUrl, details).take(1).subscribe(res => {
      const data = this.settings.itemsType === 'places' ? res.data.places : res.data;
      fromScrollEvent ? this.items = [...this.items, ...data] : this.items = data;
    });
  }

  /**
   * Register a new user
   */
  register() {
    this.user$.take(1).subscribe(user => {
      const payload = {
        data: { [this.settings.itemsType]: this.choosenItems, user_id: user && user.id },
        queryUrl : this.settings.queryUrl,
        urlTo : this.settings.urlTo
      };
      this.store.dispatch(new RegisterAction(payload));
    });
  }

  /**
   * Check if item is selected
   * @param item
   * @returns {number}
   */
  isSelected(item) {
    return this.choosenItems.filter( obj => obj['id'] === item['id']).length;
  }

}
