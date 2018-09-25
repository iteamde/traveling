import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA} from '@angular/material';

/**
 * Confirm modal component
 */
@Component({
  selector: 'app-confirm',
  templateUrl: './confirm.component.html',
  styleUrls: ['./confirm.component.scss']
})
export class ConfirmComponent implements OnInit {

  constructor( @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit() {

  }

  onSuccess() {
    if (this.data.onSuccess) this.data.onSuccess();
  }

  onReject() {
    if (this.data.onReject) this.data.onReject();
  }

}
