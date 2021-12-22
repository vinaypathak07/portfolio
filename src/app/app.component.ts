import { Component, HostListener } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { slideInAnimation } from './animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [slideInAnimation]
})
export class AppComponent {
  title = 'portfolio';
  sideBarOpened: boolean = false;

  sideBarToggler(event) {
    // console.log(event);
    this.sideBarOpened = event;
  }
  prepareRoute(outlet: RouterOutlet) {
    if (!this.sideBarOpened) {
      return outlet && outlet.activatedRouteData && outlet.activatedRouteData[ 'animation' ];
    }
  }
}
