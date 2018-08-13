import {Component, ElementRef, HostListener, Input, OnInit} from '@angular/core';
import {CloseMobileSideBar} from '../../../core/actions/core.actions';

import {Store} from '@ngrx/store';
import {State} from '../../../core/reducers/core.reducer';


@Component({
  selector: 'app-sidebar-about-box',
  templateUrl: './sidebar-about-box.component.html',
  styleUrls: ['./sidebar-about-box.component.scss']
})
export class SidebarAboutBoxComponent implements OnInit {

  @Input() data;

  constructor(private store: Store<State>, private eRef: ElementRef) {
  }

  @HostListener('document:click', ['$event'])
  clickOut(e) {
    if (!this.eRef.nativeElement.contains(e.target)) this.store.dispatch(new CloseMobileSideBar);
  }

  ngOnInit() {
  }

}
