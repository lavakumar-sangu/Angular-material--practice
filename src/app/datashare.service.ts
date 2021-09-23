 import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";
@Injectable ({
providedIn : "root"
})
export class datashareService {
pop() {
    throw new Error('Method not implemented.');
}
arr:any= [];
constructor() { }
setArray(val:any){
this.arr.push(val)
}
getArray(){
return this.arr;
}
}