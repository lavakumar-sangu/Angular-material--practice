import { Component } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { datashareService } from '../datashare.service';
import { MatDialog } from '@angular/material/dialog';
import { LoginpageComponent } from '../loginpage/loginpage.component';
import { NotificationService } from '../notification.service';

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
  private USER_DATA: user[] = [];
  constructor(
    public dataService: datashareService,
    private dialog: MatDialog,
    public notificationService: NotificationService,

  ) {
  }

  ngOnInit(): void {
    this.USER_DATA = this.dataService.getArray();
    this.dataSource.data = this.USER_DATA;
  }
  displayedColumns = ['name', 'passwords', 'actions'];
  removeData(name: number) {
    if (name > -1) {
      this.USER_DATA.splice(name, 1);
      this.ngOnInit();
      this.notificationService.confirmation("it will be remove forever", () => {
      this.notificationService.success("Removed");
      },
      'Are you sure?',
       () => {
        this.notificationService.error("confirm canceled");
      });

    }}
  onCreate() {
    const dialogRef = this.dialog.open(LoginpageComponent, {width : '35%'});
      dialogRef.afterClosed().subscribe(result => {
        if(result)
        this.USER_DATA = this.dataService.getArray();
        this.dataSource.data = this.USER_DATA;
      });
  }
}
