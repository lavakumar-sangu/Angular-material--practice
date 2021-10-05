import { Injectable } from '@angular/core';

export interface user {
  name: string;
  passwords: string;
}

@Injectable({
  providedIn: 'root'
})
export class datashareService {
  data: user[] = [];
  constructor() {}
  setArray(loginData: user) {
    this.data.push(loginData);
  }
  getArray() {
    return this.data;
  }
}
