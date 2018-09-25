import {Component, ElementRef, HostListener, Input, OnInit} from '@angular/core';

import {CloseMobileSideBar} from '../../../core/actions/core.actions';
import {State} from '../../../core/reducers/core.reducer';

import {Store} from '@ngrx/store';


/**
 * Sidebar of place component
 */
@Component({
  selector: 'app-sidebar-about-box',
  templateUrl: './sidebar-about-box.component.html',
  styleUrls: ['./sidebar-about-box.component.scss']
})
export class SidebarAboutBoxComponent implements OnInit {

  /** main info about current place */
  @Input() data;

  constructor(private store: Store<State>, private eRef: ElementRef) {
  }

  /** attach event listener on click to document */
  @HostListener('document:click', ['$event'])
  // check if click was out current component -> close menu
  clickOut(e) {
    if (!this.eRef.nativeElement.contains(e.target)) this.store.dispatch(new CloseMobileSideBar);
  }

  ngOnInit() {
  }

}
