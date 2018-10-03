import {Component, Inject } from '@angular/core';
import {MAT_DIALOG_DATA} from '@angular/material';

/**
 * Confirm modal component
 */
@Component({
  selector: 'app-confirm',
  templateUrl: './confirm.component.html',
  styleUrls: ['./confirm.component.scss']
})
export class ConfirmComponent {

  constructor( @Inject(MAT_DIALOG_DATA) public data: any) { }

  onSuccess() {
    if (this.data.onSuccess) this.data.onSuccess();
  }

  onReject() {
    if (this.data.onReject) this.data.onReject();
  }
}
