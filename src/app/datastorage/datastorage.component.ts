import { Component } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { datashareService } from '../datashare.service';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { LoginpageComponent } from '../loginpage/loginpage.component';
export interface user {
  name: string;
  passwords: string;
  actions: string;
}

@Component({
  selector: 'app-datastorage',
  templateUrl: './datastorage.component.html',
  styleUrls: ['./datastorage.component.css'],
})
export class PaginatorComponent {
  dataSource = new MatTableDataSource<any>();
  public USER_DATA: user[] = [];
  constructor(
    public dataService: datashareService,
    private dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.USER_DATA = this.dataService.getArray();
    this.dataSource.data = this.USER_DATA;
  }
  displayedColumns = ['name', 'passwords', 'actions'];
  removeData(name: number) {
    if (name > -1) {
      this.USER_DATA.splice(name, 1);
      this.ngOnInit();
    }
  }
  onCreate() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.autoFocus = false;
    dialogConfig.width = '60%';
    this.dialog.open(LoginpageComponent, dialogConfig);
  }
}
