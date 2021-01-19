import { Component, OnInit } from '@angular/core';
import { TitleService } from 'src/app/Services/title.service';
import { Title } from '@angular/platform-browser';


@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  countDheeraj = 102;
  countAlen = 18;
  countLeeza = 47;
  countAlex = 76;
  title: string = 'Card';
  tabTitle:string='Cards';


  constructor(private componentTitleService: TitleService, private titleService: Title) { }

  ngOnInit() {
    this.componentTitleService.title = this.tabTitle;
    this.titleService.setTitle(this.tabTitle);
  }

  getDheerajCount() {
    return this.countDheeraj++;
  }
  getAlenCount() {
    return this.countAlen++;
  }
  getLeezaCount() {
    return this.countLeeza++;
  }
  getAlexCount() {
    return this.countAlex++;
  }


}
