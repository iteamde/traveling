import {Component, ElementRef, HostListener} from '@angular/core';

import {State} from '../../../core/reducers';
import {getOpenLeftMobileMenu} from '../../../core/reducers';
import {CloseLeftMobileMenu} from '../../../core/actions/core.actions';

import {Store} from '@ngrx/store';

/**
 * Left menu of current place
 */
@Component({
  selector: 'app-left-outside-menu',
  templateUrl: './left-outside-menu.component.html',
  styleUrls: ['./left-outside-menu.component.scss']
})
export class LeftOutsideMenuComponent {

  public showComponent;

  constructor(private store: Store<State>, private eRef: ElementRef) {
    this.showComponent = this.store.select(getOpenLeftMobileMenu);
  }

  /** attach event listener on click to document */
  @HostListener('document:click', ['$event'])
  // check if click was out current component -> close menu
  clickOut(e) {
    if (!this.eRef.nativeElement.contains(e.target)) this.store.dispatch(new CloseLeftMobileMenu);
  }
}
