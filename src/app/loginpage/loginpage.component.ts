import { Component } from '@angular/core';
import { datashareService } from '../datashare.service';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-loginpage',
  templateUrl: './loginpage.component.html',
  styleUrls: ['./loginpage.component.css'],
})
export class LoginpageComponent {
  hide = true;
  passwords: string = '';
  name: string = '';
  user: string = '';
  email: string = '';
  mobno: number = 0;

  constructor(
    public data: datashareService,
    public dialogRef: MatDialogRef<LoginpageComponent>
  ) {}

  updateText() {
    var UserData = {
      name: this.name,
      passwords: this.passwords,
      user: this.user,
      email: this.email,
      mobno: this.mobno,
    };
    this.data.setArray(UserData);
    this.onClose();
  }
  onClose() {
    this.dialogRef.close(true);
  }
}
