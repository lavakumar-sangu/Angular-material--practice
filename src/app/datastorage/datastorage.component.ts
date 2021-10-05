import { Component, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { datashareService } from '../datashare.service';
import { MatDialog } from '@angular/material/dialog';
import { LoginpageComponent } from '../loginpage/loginpage.component';
import { NotificationService } from '../notification.service';

export interface user {
  name: string;
  passwords: string;
}

@Component({
  selector: 'app-datastorage',
  templateUrl: './datastorage.component.html',
  styleUrls: ['./datastorage.component.css'],
})
export class PaginatorComponent implements  OnInit {
  dataSource = new MatTableDataSource<{ name: string; passwords: string }>();
  private USER_DATA: user[] = [];
  constructor(
    public dataService: datashareService,
    private dialog: MatDialog,
    public notificationService: NotificationService
  ) {}


  ngOnInit(): void {
    this.USER_DATA = this.dataService.getArray();
    var storedData = JSON.parse(
      localStorage.getItem('dataSource.data') || '{}'
      );
      this.dataSource.data = storedData;
  }

  displayedColumns = ['name', 'passwords', 'actions'];

  removeData(i: any) {
    console.log(i)
    var storedData = JSON.parse(localStorage.getItem('dataSource.data') || '{}');
    var indexToRemove = i;
    if (indexToRemove == 0) {storedData.splice(0,1)}
    else
    storedData.splice(indexToRemove, i);
    localStorage.setItem('dataSource.data',JSON.stringify(storedData));

    this.notificationService.confirmation(
      'it will be remove forever',
      () => {
        this.ngOnInit();
        this.notificationService.success('Removed');
      },
      'Are you sure?',
      () => {
        this.notificationService.error('confirm canceled');
      }
    );
  }

  onCreate() {
    const dialogRef = this.dialog.open(LoginpageComponent, { width: '35%' });    
    dialogRef.afterClosed().subscribe((result) => {      
      if (result) 
      this.USER_DATA = this.dataService.getArray();
      localStorage.setItem('dataSource.data', JSON.stringify(this.USER_DATA));
      let storedData = JSON.parse(localStorage.getItem('dataSource.data') || '{}');
      this.dataSource = storedData;


      
    });
  }
}
