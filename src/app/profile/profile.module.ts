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
import { ProfileTripPlansComponent } from './components/profile-trip-plans/profile-trip-plans.component';
import { ProfileVisitedComponent } from './components/profile-visited/profile-visited.component';
import { ProfileFavoritesComponent } from './components/profile-favorites/profile-favorites.component';
import { ProfileVideosComponent } from './components/profile-videos/profile-videos.component';
import { ProfilePhotosComponent } from './components/profile-photos/profile-photos.component';
import { ProfileReviewsComponent } from './components/profile-reviews/profile-reviews.component';
import { ProfileInterestsComponent } from './components/profile-interests/profile-interests.component';


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
    ProfileSidebarComponent,
    ProfileTripPlansComponent,
    ProfileVisitedComponent,
    ProfileFavoritesComponent,
    ProfileVideosComponent,
    ProfilePhotosComponent,
    ProfileReviewsComponent,
    ProfileInterestsComponent
  ]
})
export class ProfileModule { }
