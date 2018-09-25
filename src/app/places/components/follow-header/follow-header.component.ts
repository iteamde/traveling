import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import { fromEvent } from 'rxjs/observable/fromEvent';

/**
 * Floating follow header component
 * It is showed when we scroll down the place page
 */
@Component({
  selector: 'app-follow-header',
  templateUrl: './follow-header.component.html',
  styleUrls: ['./follow-header.component.scss']
})
export class FollowHeaderComponent implements OnInit, OnDestroy {

  /** main data of current place */
  @Input() data;
  public eventSubscription$;
  public shoWHeader = false;

  constructor() { }

  ngOnInit() {
    this.eventSubscription$ = fromEvent(window, 'scroll').subscribe(event => {
      this.onWindowScroll(event);
    });
  }

  /**
   * Check if page was scrolled down
   * If scrolled we show addition header
   * @param e event
   */
  onWindowScroll(e) {
    e.target.documentElement.scrollTop > 0 ? this.shoWHeader = true : this.shoWHeader = false;
  }

  ngOnDestroy() {
    this.eventSubscription$.unsubscribe();
  }
}
