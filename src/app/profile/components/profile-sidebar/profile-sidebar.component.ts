import {Component, ElementRef, HostListener} from '@angular/core';
import {CloseMobileSideBar} from '../../../core/actions/core.actions';
import {State} from '../../../core/reducers';
import {Store} from '@ngrx/store';

@Component({
  selector: 'app-profile-sidebar',
  templateUrl: './profile-sidebar.component.html',
  styleUrls: ['./profile-sidebar.component.scss']
})
export class ProfileSidebarComponent {


  constructor(private store: Store<State>,
              private eRef: ElementRef) {
  }

  @HostListener('document:click', ['$event'])
  clickOut(e) {
    if (!this.eRef.nativeElement.contains(e.target)) this.store.dispatch(new CloseMobileSideBar);
  }
}
