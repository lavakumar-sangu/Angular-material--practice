 import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";
@Injectable ({
providedIn : "root"
})
export class datashareService {
arr:any= [];
constructor() { }
setArray(val:any){
this.arr.push(val)
}
getArray(){
return this.arr;
}
}