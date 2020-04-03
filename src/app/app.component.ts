import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'portfolio';
  sideBarOpened: boolean;

  sideBarToggler(event) {
    // console.log(event);
    this.sideBarOpened = event;
  }
}
