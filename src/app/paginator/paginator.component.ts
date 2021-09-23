import { Component } from '@angular/core';
import { MatTableDataSource} from '@angular/material/table';
import { datashareService } from '../datashare.service';

export interface user {
name : string,
passwords : string,
actions:string,
}

@Component({
selector: 'app-paginator',
templateUrl: './paginator.component.html',
styleUrls: ['./paginator.component.css']
})
export class PaginatorComponent {
dataSource = new MatTableDataSource<any>();
public USER_DATA : user[] =[];
constructor(public dataService :datashareService){}
ngOnInit(): void {
this.USER_DATA = this.dataService.getArray();
this.dataSource.data = this.USER_DATA;
}
displayedColumns= ['name', 'passwords', 'actions'];
removeData(name:number){
    if (name > -1) {
    this.USER_DATA.splice(name, 1);
    this.ngOnInit();
    }
}
}