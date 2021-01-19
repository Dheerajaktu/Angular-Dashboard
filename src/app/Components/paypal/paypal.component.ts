import { Component, OnInit } from '@angular/core';
import { TitleService } from 'src/app/Services/title.service';
import { Title } from '@angular/platform-browser';
import { DatePipe } from '@angular/common';
import {PipeTransform, Pipe} from '@angular/core';

@Component({
  selector: 'app-paypal',
  templateUrl: './paypal.component.html',
  styleUrls: ['./paypal.component.css']
})
export class PaypalComponent implements OnInit {
  title: string = 'Paypal';
  tabTitle: string = 'Paypal';
  public myName = 'rikcy';
  public date = new Date();


  constructor(private componentTitleService: TitleService, private titleService: Title) { }


  ngOnInit() {
    this.componentTitleService.title = this.title;
    this.titleService.setTitle(this.tabTitle);
  }



}
