import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Dashboard1';
  // showLoader: boolean = true;


  // constructor(private _router: Router) {
  //   this._router.events.subscribe((routerEvent: Event) => {
  //     if (routerEvent instanceof NavigationStart) {
  //       this.showLoader = true;
  //     }
  //     if (routerEvent instanceof NavigationEnd) {
  //       this.showLoader = false;
  //     }

  //   });


  // }

}
