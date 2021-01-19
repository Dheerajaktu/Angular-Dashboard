import { Component, OnInit } from '@angular/core';
import { TitleService } from 'src/app/Services/title.service';
import { CartService } from 'src/app/Services/cart.service';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-shopping',
  templateUrl: './shopping.component.html',
  styleUrls: ['./shopping.component.css']
})
export class ShoppingComponent implements OnInit {
  cartCounter: number = 0;
  title: string = 'Shopping';
  tabTitle:string='Shopping';


  constructor(private componentTitleService: TitleService, private cartService: CartService, private titleService: Title) { }

  ngOnInit() {
    this.componentTitleService.title = this.title;
    this.cartService.cart = this.cartCounter;
    this.titleService.setTitle(this.tabTitle);

  }

  addToCart() {
    return this.cartCounter++;
  }

}
