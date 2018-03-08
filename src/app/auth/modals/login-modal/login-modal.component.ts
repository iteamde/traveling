import { Component, OnInit , Input } from '@angular/core';
import {Location} from '@angular/common';

@Component({
  selector: 'app-login-modal',
  templateUrl: './login-modal.component.html',
  styleUrls: ['./login-modal.component.css']
})
export class LoginModalComponent implements OnInit {

  constructor(private _location: Location) {
  }

  ngOnInit() {

  }

  backClicked() {
    this._location.back();
  }



}
