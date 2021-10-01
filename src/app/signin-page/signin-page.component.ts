import { Component, OnInit } from '@angular/core';
import { user } from '../datashare.service';

@Component({
  selector: 'app-signin-page',
  templateUrl: './signin-page.component.html',
  styleUrls: ['./signin-page.component.css'],
})
export class SigninPageComponent implements OnInit {
  hide = true;
  userDetails: user = {
    name: '',
    email: '',
    passwords: '',
    mobno: 0,
  };
  constructor() {}
  ngOnInit() {}
  updateText() {
    var obj = {
      name: this.userDetails.name,
      email: this.userDetails.email,
      mobile: this.userDetails.mobno,
    };
  }
}
