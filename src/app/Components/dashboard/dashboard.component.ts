import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';
import { Title, Meta } from '@angular/platform-browser';
import { TitleService } from 'src/app/Services/title.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  title = 'Dashboard';

  constructor(private titleService: Title, private meta: Meta, private componentTitleService: TitleService) { }

  ngOnInit() 
  {
    this.titleService.setTitle(this.title);

    this.componentTitleService.title = this.title;
  

  }

}
