import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import { RouterModule} from '@angular/router';
import {FormsModule} from '@angular/forms';

import {CoreEffects} from './effects/core.effects';
import {SharedModule} from '../shared/shared.module';
import {ValidationService} from './services/validation';
import {ModalManager} from './services/modal-manager.service';
import {TermsOfServiceComponent} from './components/terms-of-service/terms-of-service.component';
import {PrivacyPolicyComponent} from './components/privacy-policy/privacy-policy.component';
import { ErrorComponent } from './components/error/error.component';
import { ModalWrapperComponent } from './components/modal-wrapper/modal-wrapper.component';
import { ConfirmComponent } from './components/modals/confirm/confirm.component';
import {HeaderComponent} from './components/header/header.component';
import {FooterComponent} from './components/footer/footer.component';
import {MainHeaderComponent} from './components/main-header/main-header.component';
import {GalleryModalComponent} from './components/gallery-modal/gallery-modal.component';
import { SliderWrapperComponent } from './components/slider-wrapper/slider-wrapper.component';
import {FollowButtonComponent} from './components/follow-button/follow-button.component';
import {ReverseArrPipe} from './pipes/reverseArrayPipe';
import { MobileMenuButtonsComponent } from './components/mobile-menu-buttons/mobile-menu-buttons.component';
import {GalleryBoxComponent} from './components/gallery-box/gallery-box.component';
import {CustomCalendarComponent} from './components/custom-calendar/custom-calendar.component';
import {KeysPipe} from './pipes/keysPipe';
import {RegexPipe} from './pipes/matchPipe';
import {TimeAgoPipe} from 'time-ago-pipe';
import {RemoveUnderscorePipe} from './pipes/removeUnderscorePipe';
import {MathRandomPipe} from './pipes/mathRandomPipe';
import {SanitizeHtmlPipe} from './pipes/sanitizeHtmlPipe';

import {EffectsModule} from '@ngrx/effects';
import {AgmCoreModule} from '@agm/core';


@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    SharedModule,
    EffectsModule.forFeature([CoreEffects]),
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyAXf0rOLWAEcQn2pAqRyZeighQ_y8NtNYY'
    }),
  ],
  providers: [
    ValidationService,
    ModalManager
  ],
  declarations: [
    TermsOfServiceComponent,
    PrivacyPolicyComponent,
    ModalWrapperComponent,
    ErrorComponent,
    ConfirmComponent,
    HeaderComponent,
    FooterComponent,
    MainHeaderComponent,
    GalleryModalComponent,
    TimeAgoPipe,
    SliderWrapperComponent,
    FollowButtonComponent,
    MobileMenuButtonsComponent,
    GalleryBoxComponent,
    CustomCalendarComponent,
    KeysPipe,
    ReverseArrPipe,
    RegexPipe,
    RemoveUnderscorePipe,
    MathRandomPipe,
    SanitizeHtmlPipe
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    MainHeaderComponent,
    GalleryModalComponent,
    AgmCoreModule,
    SliderWrapperComponent,
    FollowButtonComponent,
    MobileMenuButtonsComponent,
    GalleryBoxComponent,
    CustomCalendarComponent,
    RegexPipe,
    KeysPipe,
    ReverseArrPipe,
    RemoveUnderscorePipe,
    MathRandomPipe,
    SanitizeHtmlPipe
  ]
})
export class CoreModule {
  // constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
  //   if (parentModule) {
  //     throw new Error(
  //       'CoreModule is already loaded. Import it in the AppModule only');
  //   }
  // }
}
