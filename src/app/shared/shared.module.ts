import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import {MaterialModule} from '../material.module';
import {MAT_DIALOG_DEFAULT_OPTIONS} from '@angular/material';
import {FormsModule} from '@angular/forms';
import { ScrollEventModule } from 'ngx-scroll-event';
import {MyDatePickerModule} from 'mydatepicker';
import { ImgFallbackModule } from 'ngx-img-fallback';

@NgModule({

  imports: [
    CommonModule,
    ScrollEventModule,
    MyDatePickerModule,
    RouterModule,
    ImgFallbackModule
  ],
  exports: [
    RouterModule,
    MaterialModule,
    FormsModule,
    CommonModule,
    ScrollEventModule,
    MyDatePickerModule,
    ImgFallbackModule
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
    }
  ]
})

export class SharedModule { }
