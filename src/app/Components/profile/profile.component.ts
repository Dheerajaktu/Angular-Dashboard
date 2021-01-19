import {Component, OnInit} from '@angular/core';
import { TitleService } from 'src/app/Services/title.service';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  url: any;
  title:string='User Profile';
  tabTitle:string='User Profile';

  constructor(private componentTitleService: TitleService, private titleService: Title) {
  }

  ngOnInit() {
    this.componentTitleService.title = this.title;
    this.titleService.setTitle(this.tabTitle);
  }

  onSelectFile(event) {
    if (event.target.files && event.target.files[0]) {
      const reader = new FileReader();
      reader.readAsDataURL(event.target.files[0]); // read file as data url
      reader.onload = (event) => { // called once readAsDataURL is completed
        this.url = event.target;
      };
    }
  }

}
