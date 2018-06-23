import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {PlacesComponent} from './places.component';
import {CoreModule} from '../core/core.module';
import {SharedModule} from '../shared/shared.module';
import {PlacesService} from './services/places.service';
import {PlacesInfoResolver} from './services/places-info-resolver';
import { LeftOutsideMenuComponent } from './components/left-outside-menu/left-outside-menu.component';
import { PlacesTopBannerComponent } from './components/places-top-banner/places-top-banner.component';
import {PlacesGalleryBoxComponent} from './components/places-gallery-box/places-gallery-box.component';
import {FollowPlaceButtonComponent} from './components/follow-place-button/follow-place-button.component';
import {PlacesAboutBoxComponent} from './components/places-about-box/places-about-box.component';
import { SidebarAboutBoxComponent } from './components/sidebar-about-box/sidebar-about-box.component';
import { UserRatingBoxComponent } from './components/user-rating-box/user-rating-box.component';
import { PlacesPhotoBoxComponent } from './components/places-photo-box/places-photo-box.component';
import {FollowersListComponent} from './components/followers-list/followers-list.component';
import {TrendingPlacesListComponent} from './components/trending-places-list/trending-places-list.component';
import { PlacesFooterComponent } from './components/places-footer/places-footer.component';



@NgModule({
  imports: [
    CoreModule ,
    CommonModule,
    SharedModule,
    CoreModule
  ],
  declarations: [
    PlacesComponent,
    LeftOutsideMenuComponent,
    PlacesTopBannerComponent,
    PlacesGalleryBoxComponent,
    FollowPlaceButtonComponent,
    PlacesAboutBoxComponent,
    SidebarAboutBoxComponent,
    UserRatingBoxComponent,
    PlacesPhotoBoxComponent,
    FollowersListComponent,
    TrendingPlacesListComponent,
    PlacesFooterComponent

  ],
  providers: [
    PlacesService,
    PlacesInfoResolver
  ],
  entryComponents: [
    FollowersListComponent,
    TrendingPlacesListComponent

  ]
})

export class PlacesModule { }
