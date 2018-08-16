import {Component, ElementRef, HostListener, OnInit} from '@angular/core';
import {getOpenLeftMobileMenu, State} from '../../../core/reducers/index';
import {Store} from '@ngrx/store';
import {CloseLeftMobileMenu} from '../../../core/actions/core.actions';

@Component({
  selector: 'app-profile-left-menu',
  templateUrl: './profile-left-menu.component.html',
  styleUrls: ['./profile-left-menu.component.scss']
})
export class ProfileLeftMenuComponent implements OnInit {

  public showComponent;

  constructor(private store: Store<State>, private eRef: ElementRef) {

    this.showComponent = this.store.select(getOpenLeftMobileMenu);

  }

  ngOnInit() {
  }

  @HostListener('document:click', ['$event'])
  clickOut(e) {
    if (!this.eRef.nativeElement.contains(e.target)) this.store.dispatch(new CloseLeftMobileMenu);
  }
}
