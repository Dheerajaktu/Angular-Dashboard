import { Component, ViewChild } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { Router } from '@angular/router';
import { Location, LocationStrategy, PathLocationStrategy } from '@angular/common';
import { TitleService } from 'src/app/Services/title.service';
import { ShoppingComponent } from '../shopping/shopping.component';
import { CartService } from 'src/app/Services/cart.service';
import { Pipe } from '@angular/core';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent {
  opened = false;
  // otherTheme: boolean = false;
  changeDark = '';
  public date = new Date();
  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );
  constructor(private breakpointObserver: BreakpointObserver, public title: TitleService, public cartService: CartService) {

  }

  // this is for change theme


  darkTheme(data: any) {

    if (data == 'Dark') {
      this.changeDark = 'Dark';
    }
    if (data == 'Pink') {
      this.changeDark = 'Pink';
    }
    if (data == 'defaultColor') {
      this.changeDark = 'defaultColor';
    }
  }

  // pinkTheme(data: any) {
  //   if (data == 'Pink') {
  //     this.changePink == 'Pink'
  //   }

  // }


}
