import {Component, ElementRef, HostListener } from '@angular/core';

import {getOpenLeftMobileMenu, State} from '../../../core/reducers/index';
import {CloseLeftMobileMenu} from '../../../core/actions/core.actions';

import {Store} from '@ngrx/store';

@Component({
  selector: 'app-profile-left-menu',
  templateUrl: './profile-left-menu.component.html',
  styleUrls: ['./profile-left-menu.component.scss']
})
export class ProfileLeftMenuComponent {

  public showComponent;

  constructor(private store: Store<State>, private eRef: ElementRef) {
    this.showComponent = this.store.select(getOpenLeftMobileMenu);
  }

  @HostListener('document:click', ['$event'])
  clickOut(e) {
    if (!this.eRef.nativeElement.contains(e.target)) this.store.dispatch(new CloseLeftMobileMenu);
  }
}
