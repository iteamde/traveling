import { NgModule } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import {MaterialModule} from '../material.module';
import {MAT_DIALOG_DEFAULT_OPTIONS} from '@angular/material';



@NgModule({
  declarations: [
    HeaderComponent
  ],
  imports: [CommonModule],
  exports: [
    RouterModule,
    HeaderComponent,
    MaterialModule
  ],
  providers: [
    {provide: MAT_DIALOG_DEFAULT_OPTIONS, useValue: {
        hasBackdrop: true,
        panelClass: 'custom-overlay-pane-class',
        backdropClass: 'custom-modal-backdrop',
        maxWidth: 'auto'
      }
    }
  ]
})

export class SharedModule { }
