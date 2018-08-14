import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule} from '@angular/router';

import {MatSliderModule} from '@angular/material/slider';
import {EffectsModule} from '@ngrx/effects';

import { CountryComponent } from './country.component';
import {SharedModule} from '../shared/shared.module';
import {CoreModule} from '../core/core.module';
import {CountryService} from './services/country.service';
import {CountryInfoResolver} from './services/country-info-resolver';
import { CountryAboutBoxComponent } from './components/country-about-box/country-about-box.component';
import { LeftOutsideMenuComponent } from './components/left-outside-menu/left-outside-menu.component';
import { CountryTopBannerComponent } from './components/country-top-banner/country-top-banner.component';
import { CountryMiddleBannerComponent } from './components/country-middle-banner/country-middle-banner.component';
import { SidebarAboutBoxComponent } from './components/sidebar-about-box/sidebar-about-box.component';
import { GalleryModalComponent } from '../core/components/gallery-modal/gallery-modal.component';
import { CountryAboutBox2Component } from './components/country-about-box2/country-about-box2.component';
import { CountryIndexesBoxComponent } from './components/country-indexes-box/country-indexes-box.component';
import { CountryEmergencyNumberComponent } from './components/country-emergency-number/country-emergency-number.component';
import { PlacesListComponent } from './components/places-list/places-list.component';
import { HolidaysListComponent } from './components/holidays-list/holidays-list.component';
import { CountryBudgetBoxComponent } from './components/country-budget-box/country-budget-box.component';
import { CountryAccordionModalComponent } from './modals/country-accordion-modal/country-accordion-modal.component';
import {ConvertService} from '../core/services/convert.service';
import {CountryEffects} from './effects/country.effects';
import {CountryRoutes} from './country.routing';



@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    CoreModule,
    MatSliderModule,
    RouterModule.forChild(CountryRoutes),
    EffectsModule.forFeature([CountryEffects]),
  ],
  declarations: [
    CountryComponent,
    CountryAboutBoxComponent,
    LeftOutsideMenuComponent,
    CountryTopBannerComponent,
    CountryMiddleBannerComponent,
    SidebarAboutBoxComponent,
    CountryAboutBox2Component,
    CountryIndexesBoxComponent,
    CountryEmergencyNumberComponent,
    PlacesListComponent,
    HolidaysListComponent,
    CountryBudgetBoxComponent,
    CountryAccordionModalComponent,

  ],
  providers: [
    CountryService,
    CountryInfoResolver,
    ConvertService
  ],
  entryComponents: [
    GalleryModalComponent,
    PlacesListComponent,
    HolidaysListComponent,
    CountryAccordionModalComponent]
})
export class CountryModule { }
