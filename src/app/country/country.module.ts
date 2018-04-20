import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CountryComponent } from './country.component';
import {SharedModule} from '../shared/shared.module';
import {CoreModule} from '../core/core.module';
import {CountryService} from './services/country.service';
import {CountryInfoResolver} from './services/country-info-resolver';
import { CountryGalleryBoxComponent } from './components/country-gallery-box/country-gallery-box.component';
import { CountryAboutBoxComponent } from './components/country-about-box/country-about-box.component';
import {AgmCoreModule} from '@agm/core';
import { LeftOutsideMenuComponent } from './components/left-outside-menu/left-outside-menu.component';
import { CountryTopBannerComponent } from './components/country-top-banner/country-top-banner.component';
import { CountryMiddleBannerComponent } from './components/country-middle-banner/country-middle-banner.component';
import { SidebarAboutBoxComponent } from './components/sidebar-about-box/sidebar-about-box.component';
import { FollowButtonComponent } from './components/follow-button/follow-button.component';
import { GalleryModalComponent } from './components/gallery-modal/gallery-modal.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    CoreModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyAXf0rOLWAEcQn2pAqRyZeighQ_y8NtNYY'
    }),
  ],
  declarations: [
    CountryComponent,
    CountryGalleryBoxComponent,
    CountryAboutBoxComponent,
    LeftOutsideMenuComponent,
    CountryTopBannerComponent,
    CountryMiddleBannerComponent,
    SidebarAboutBoxComponent,
    FollowButtonComponent,
    GalleryModalComponent
  ],
  providers: [
    CountryService,
    CountryInfoResolver
  ],
  entryComponents: [GalleryModalComponent]
})
export class CountryModule { }
