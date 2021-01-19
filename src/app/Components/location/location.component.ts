import { Component, OnInit } from '@angular/core';
import { TitleService } from 'src/app/Services/title.service';
import { Title } from '@angular/platform-browser';


@Component({
  selector: 'app-location',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.css']
})
export class LocationComponent implements OnInit {
  page: string;
  title: string = 'Geo Location';
  tabTitle: string = 'Geo Location';
  public imgUrl = "/assets/img/car.gif"

  constructor(private componentTitleService: TitleService, private titleService: Title) {
  }

  ngOnInit() {
    this.componentTitleService.title = this.title;
    this.titleService.setTitle(this.tabTitle);
  }


  showAlert() {


  }


}
