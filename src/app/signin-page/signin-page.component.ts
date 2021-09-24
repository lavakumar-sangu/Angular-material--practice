import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-signin-page',
  templateUrl: './signin-page.component.html',
  styleUrls: ['./signin-page.component.css']
})
export class SigninPageComponent implements OnInit {
  hide = true;
  msg: any;
  name: any;
  email: any;
  mobno: any;
  constructor() {}
  ngOnInit() {
  }
  public obj: Array<{name: string, email: string, mobno:number}> = [];
  updateText() {
    var obj = {
      name:this.name,
      email:this.email,
      mobile:this.mobno
    }
    
  }
}
