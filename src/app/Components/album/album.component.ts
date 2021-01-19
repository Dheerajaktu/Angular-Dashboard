import { Component, OnInit, ViewChild } from '@angular/core';
import { AlbumService } from 'src/app/Services/album.service';
import { MatPaginator, MatTableDataSource, MatSort } from '@angular/material';
import { TitleService } from 'src/app/Services/title.service';
@Component({
  selector: 'app-album',
  templateUrl: './album.component.html',
  styleUrls: ['./album.component.css']
})
export class AlbumComponent implements OnInit {
  tabTitle: string = 'Album from Server';
  public albumData = [];
  displayedColumns = ['albumId', 'id', 'title', 'url'];
  dataSource;
  isLoading = true;
  dataLength: number;
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  filterSeachHighlightId: number;
  filterSeachHighlightTitle: string;



  constructor(private albumService: AlbumService, private componentTitleService: TitleService) { }

  ngOnInit() {
    this.albumService.httpGetAlbum().subscribe(res => {
      this.albumData = res;
      this.dataSource = new MatTableDataSource(this.albumData);
      this.dataSource.paginator = this.paginator;
      this.dataLength = this.albumData.length;
      if (this.albumData.length > 0) {
        this.isLoading = false;
      }
    });
    this.componentTitleService.title = this.tabTitle;


  }
  searchById(filterId: number) {
    this.filterSeachHighlightId = this.dataSource.filter = filterId;
    console.log('Filter ID' + this.filterSeachHighlightId);
  }
  searchByTitle(filterValue: string) {
    this.filterSeachHighlightTitle = this.dataSource.filter = filterValue.trim().toLocaleLowerCase();
  }

}

