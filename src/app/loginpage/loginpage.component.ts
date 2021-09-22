import { Component} from '@angular/core';
import { datashareService } from '../datashare.service';

@Component({
  selector: 'app-loginpage',
  templateUrl: './loginpage.component.html',
  styleUrls: ['./loginpage.component.css']
})
export class LoginpageComponent {
  hide = true;
  passwords: any;
  name: any;
 
  constructor(public data :datashareService) { }
  
  public obj: Array<{name: string, passwords: string}> = [];
  updateText() {
    var obj = {
      name:this.name,
      passwords:this.passwords,
    }
    this.data.updateData(obj)
    console.log(obj);
    
  }
    }