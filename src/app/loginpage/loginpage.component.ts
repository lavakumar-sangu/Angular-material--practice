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
  passwords: any;
  name: any;
  constructor(
    public data: datashareService,
    public dialogRef: MatDialogRef<LoginpageComponent>
  ) {}
  public obj: Array<{ name: string; passwords: string }> = [];
  updateText() {
    var obj = {
      name: this.name,
      passwords: this.passwords,
    };
    this.data.setArray(obj);
    this.onClose();
  }
  onClose() {
    this.dialogRef.close();
  }
}
