import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {SharedModule} from '../shared/shared.module';
import {CoreModule} from '../core/core.module';
import {RouterModule} from '@angular/router';
import {ProfileRoutes} from './profile.routing';
import {ProfileComponent} from './profile.component';
import { ProfileHeaderComponent } from './components/profile-header/profile-header.component';
import { ProfileLeftMenuComponent } from './components/profile-left-menu/profile-left-menu.component';
import { ProfileSidebarComponent } from './components/profile-sidebar/profile-sidebar.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    CoreModule,
    RouterModule.forChild(ProfileRoutes),
  ],
  declarations: [
    ProfileComponent,
    ProfileHeaderComponent,
    ProfileLeftMenuComponent,
    ProfileSidebarComponent
  ]
})
export class ProfileModule { }
