import { NgModule } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import {MaterialModule} from '../material.module';
import {MAT_DIALOG_DEFAULT_OPTIONS} from '@angular/material';
import {FormsModule} from '@angular/forms';
import { ScrollEventModule } from 'ngx-scroll-event';
import {PlatformService} from '../core/services/platform.service';
import { FooterComponent } from './footer/footer.component';
import {MyDatePickerModule} from 'mydatepicker';
import { MainHeaderComponent } from './components/main-header/main-header.component';

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    MainHeaderComponent
  ],
  imports: [
    CommonModule,
    ScrollEventModule,
    MyDatePickerModule,
    RouterModule
  ],
  exports: [
    RouterModule,
    HeaderComponent,
    MaterialModule,
    FormsModule,
    CommonModule,
    FooterComponent,
    ScrollEventModule,
    MyDatePickerModule,
    MainHeaderComponent
  ],
  providers: [
    {provide: MAT_DIALOG_DEFAULT_OPTIONS, useValue: {
        hasBackdrop: true,
        panelClass: 'custom-overlay-pane-class',
        backdropClass: 'custom-modal-backdrop',
        maxWidth: 'auto',
        disableClose: true,
        closeOnNavigation: true
      }
    },
    PlatformService
  ]
})

export class SharedModule { }
