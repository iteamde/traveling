import {Component, ElementRef, HostListener, OnInit} from '@angular/core';
import {Store} from '@ngrx/store';
import {State} from '../../../core/reducers';
import {getOpenLeftMobileMenu} from '../../../core/reducers';
import {CloseLeftMobileMenu} from '../../../core/actions/core.actions';

@Component({
  selector: 'app-left-outside-menu',
  templateUrl: './left-outside-menu.component.html',
  styleUrls: ['./left-outside-menu.component.scss']
})
export class LeftOutsideMenuComponent implements OnInit {

  public showComponent;

  constructor(private store: Store<State>, private eRef: ElementRef) {

    this.showComponent = this.store.select(getOpenLeftMobileMenu);

  }

  ngOnInit() {
  }

  @HostListener('document:click', ['$event'])
  clickOut(e) {
    if (!this.eRef.nativeElement.contains(e.target)) {
      this.store.dispatch(new CloseLeftMobileMenu);
    }
  }

}
