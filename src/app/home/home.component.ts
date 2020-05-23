import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { slideInAnimation, fadeAnimation } from '../animations';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  // animations: [slideInAnimation]
})
export class HomeComponent implements OnInit {

  wait = false;

  constructor() { }

  ngOnInit() { }

  prepareRoute(outlet: RouterOutlet) {
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData[ 'animation' ];
  }
// openSnackBar(event) {
//   // this._snackBar.open(event.message, event.action, {
//   //   duration: event.duration, verticalPosition: 'top', horizontalPosition: 'start'
//   // });
// }

}
