import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/Services/http.service';
import { HttpResponse } from '@angular/common/http';
import { MatTableDataSource } from '@angular/material/table';
import { DataSource } from '@angular/cdk/collections';
import { Observable } from 'rxjs';
import { HttpGetModel } from 'src/app/Models/httpGetModel';
import { Router, NavigationEnd, NavigationStart } from '@angular/router';
import { Event } from '@angular/router';
import { TitleService } from 'src/app/Services/title.service';



@Component({
  selector: 'app-api',
  templateUrl: './api.component.html',
  styleUrls: ['./api.component.css']
})
export class ApiComponent implements OnInit {
  public dataArray = [];
  isLoading = true;
  tabTitle = 'API Connection';

  dataSource = new UserDataSource(this._service);
  displayedColumns = ['id', 'name', 'email'];


  constructor(private _service: HttpService, private componentTitleService: TitleService) {


  }

  ngOnInit() {
    this.dataSource.connect().subscribe((dheeraj => {
      if (dheeraj.length > 0) {
        this.isLoading = false
      }

    }));
    this.componentTitleService.title = this.tabTitle;



  }

}

export class UserDataSource extends DataSource<any> implements OnInit {



  constructor(private _userService: HttpService) {
    super();
  }

  connect(): Observable<HttpGetModel[]> {

    return this._userService.httpGetData()
  }
  disconnect() { }

  ngOnInit() { }




}
