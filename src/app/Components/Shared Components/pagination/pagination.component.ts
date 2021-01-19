import { Component, OnInit, ViewChild, Input, SimpleChanges } from '@angular/core';
import { MatPaginator } from '@angular/material';
import { EventEmitter } from 'events';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.css']
})
export class PaginationComponent implements OnInit {
  @ViewChild(MatPaginator, { static: false }) paginator: MatPaginator;
  @Input() pageInTable;
  @Input() paginatorIndex;
  @Input() paginationData = new EventEmitter();


  constructor() { }

  ngOnInit() {
  }

  // ngOnChanges(simpleChanges: SimpleChanges) {
  //   this.paginator.pageIndex = this.paginatorIndex;
  // }

  // changePage(page) {
  //   const pageNumber = parseInt(page, 10);
  //   if (pageNumber === -2) {
  //     if (this.paginator.pageIndex !== 0) {
  //       this.paginator.pageIndex -= 1;
  //       const pageIndex = this.paginator.pageIndex + 1;
  //       this.paginationData.emit(pageIndex);
  //     }
  //   } else if (pageNumber === -3) {
  //     if (this.paginator.pageIndex < this.pageInTable - 1) {
  //       this.paginator.pageIndex += 1;
  //       const pageIndex = this.paginator.pageIndex + 1;
  //       this.paginationData.emit(pageIndex);
  //     }
  //   } else {
  //     if (pageNumber !== this.paginator.pageIndex) {
  //       this.paginator.pageIndex = pageNumber;
  //       const pageIndex = this.paginator.pageIndex + 1;
  //       this.paginationData.emit(pageIndex);
  //     }
  //   }
  // }
  // convertNumToArray(i: number) {
  //   return new Array(i);
  // }

}


