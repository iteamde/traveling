import {Component, Input, OnInit} from '@angular/core';
import {ScrollEvent} from 'ngx-scroll-event';
import {ApiService} from '../../../core/services/api.service';
import {RegisterAction} from '../../actions/auth.actions';
import {getLoggedUser, State} from '../../../core/reducers';
import {Store} from '@ngrx/store';
import {Observable} from 'rxjs/Observable';

@Component({
  selector: 'app-search-box',
  templateUrl: './search-box.component.html',
  styleUrls: ['./search-box.component.css']
})
export class SearchBoxComponent implements OnInit {
  protected user$: Observable<any>;
  public items: Array<any> = [];
  public choosenItems: Array<any> = [];
  public query: string = '';
  public itemToChoose = 5;
  private  limit: number = 20;
  private  offset: number = 0;
  @Input() settings:any;

  constructor(private ApiService: ApiService, private store: Store<State> ) {
    this.user$ = store.select(getLoggedUser);
  }

  ngOnInit() {
    console.log("Its settings" , this.settings);
    this.getItems(false);
  }


  selectItem(item) {
    item.selected = !item.selected;

    if ( item.selected ) {
      this.choosenItems.push(item);
      this.items.forEach( (elem, index) => {
        if ( item.id === elem.id) {
          return this.items.splice(index, 1);
        }
      });
    } else {
      this.choosenItems.forEach( (elem, index) => {
        if ( item.id === elem.id) {
          return this.choosenItems.splice(index, 1);
        }
      });
    }
  }

  public handleScroll(event: ScrollEvent) {
    if (event.isReachingBottom) {
      this.offset += this.limit;
      this.getItems(true);
    }
  }

  public queryChange() {
    console.log("queryChange", this.query);
    this.getItems(false);
  }

  private getItems(fromScrollEvent){
    let details = {
      query: this.query,
      limit: this.limit,
      offset: this.offset,
      language_id: 1
    };

    this.ApiService.post(details, this.settings.getDataUrl).take(1).subscribe(res => {
      fromScrollEvent ? this.items = [...this.items, ...res.data] : this.items = res.data;
    });
  }

  register() {
    this.user$.take(1).subscribe(user => {
      this.store.dispatch(new RegisterAction({
        data: { [this.settings.itemsType]: this.choosenItems, user_id: (user && user.data && user.data.user_id) || 116 },
        queryUrl : this.settings.queryUrl,
        urlTo : this.settings.urlTo
      }));
    });
  }

}
