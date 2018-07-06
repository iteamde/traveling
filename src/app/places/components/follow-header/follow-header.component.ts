import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import { fromEvent } from 'rxjs/observable/fromEvent';



@Component({
  selector: 'app-follow-header',
  templateUrl: './follow-header.component.html',
  styleUrls: ['./follow-header.component.scss']
})
export class FollowHeaderComponent implements OnInit, OnDestroy {

  @Input() data;
  public eventSubscription$;
  public shoWHeader = false;

  constructor() { }

  ngOnInit() {
    this.eventSubscription$ = fromEvent(window, 'scroll').subscribe(event => {
      this.onWindowScroll(event);
    });
  }

  onWindowScroll(e) {
    e.target.documentElement.scrollTop > 0 ? this.shoWHeader = true : this.shoWHeader = false;
  }

  ngOnDestroy() {
    this.eventSubscription$.unsubscribe();
  }
}
