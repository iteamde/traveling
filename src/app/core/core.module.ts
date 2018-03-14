import {NgModule, Optional, SkipSelf} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {FormsModule} from '@angular/forms';
import {EffectsModule} from '@ngrx/effects';


import {CoreEffects} from './effects/core.effects';
import {SharedModule} from '../shared/shared.module';
import {ValidationService} from './services/validation';
import {ModalManager} from './services/modal-manager.service';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    SharedModule,

    EffectsModule.forFeature([CoreEffects])
  ],
  providers: [ValidationService, ModalManager],
  declarations: [],
  exports: []
})
export class CoreModule {
  constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
    if (parentModule) {
      throw new Error(
        'CoreModule is already loaded. Import it in the AppModule only');
    }
  }
}
