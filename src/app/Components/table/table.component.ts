import { Component, OnInit, ViewChild } from '@angular/core';
import { TableElements } from './model/element';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator, MatSort } from '@angular/material';
import { TitleService } from 'src/app/Services/title.service';
import { Title } from '@angular/platform-browser';


@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements TableElements, OnInit {
  title: string = 'Tables';
  tabTitle:string='Tables';;

  @ViewChild(MatSort, { static: true }) sort: MatSort;
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;

  name: string;
  position: number;
  weight: number;
  symbol: string;
  public col1 = 'No.';
  public col2 = 'Name';
  public col3 = 'Weight';
  public col4 = 'Symbol';
  displayCols: string[] = ['position', 'name', 'weight', 'symbol'];
  resultsLength = 0;
 

  ELEMENT_DATA: TableElements[] = [
    { position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H' },
    { position: 2, name: 'Helium', weight: 4.0026, symbol: 'He' },
    { position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li' },
    { position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be' },
    { position: 5, name: 'Boron', weight: 10.811, symbol: 'B' },
    { position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C' },
    { position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N' },
    { position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O' },
    { position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F' },
    { position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne' },
    { position: 11, name: 'Hydrogen', weight: 1.0079, symbol: 'H' },
    { position: 12, name: 'Helium', weight: 4.0026, symbol: 'He' },
    { position: 13, name: 'Lithium', weight: 6.941, symbol: 'Li' },
    { position: 14, name: 'Beryllium', weight: 9.0122, symbol: 'Be' },
    { position: 15, name: 'Boron', weight: 10.811, symbol: 'B' },
    { position: 16, name: 'Carbon', weight: 12.0107, symbol: 'C' },
    { position: 17, name: 'Nitrogen', weight: 14.0067, symbol: 'N' },
    { position: 18, name: 'Oxygen', weight: 15.9994, symbol: 'O' },
    { position: 19, name: 'Fluorine', weight: 18.9984, symbol: 'F' },
    { position: 20, name: 'Neon', weight: 20.1797, symbol: 'Ne' }
  ];

  // dataSource= this.ELEMENT_DATA;
  dataSource = new MatTableDataSource(this.ELEMENT_DATA);
  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLocaleLowerCase();
  }
  constructor(private componentTitleService: TitleService, private titleService: Title) { }
  ngOnInit() {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
    this.componentTitleService.title = this.title;
    this.titleService.setTitle(this.tabTitle);
  }


}
