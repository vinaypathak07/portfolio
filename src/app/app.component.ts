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
  sideBarOpened: boolean;

  sideBarToggler(event) {
    // console.log(event);
    this.sideBarOpened = event;
  }
  prepareRoute(outlet: RouterOutlet) {
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData[ 'animation' ];
  }
}
