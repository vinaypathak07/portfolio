import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { slideInAnimation, fadeAnimation } from '../animations';
import { ApplyThemeService } from '../shared/apply-theme.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  // animations: [slideInAnimation]
})
export class HomeComponent implements OnInit {

  wait = false;
  firstBackground: string;
  secondBackground: string;
  thirdBackground: string;

  constructor(private themeService: ApplyThemeService) { }

  ngOnInit() {
    this.themeService.captureTheme.subscribe((received: any) => {
      this.firstBackground = received.color;
      this.secondBackground = '-webkit-' + received.gradient;
      this.thirdBackground = received.gradient;
    });
   }

  prepareRoute(outlet: RouterOutlet) {
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData['animation'];
  }
  // openSnackBar(event) {
  //   // this._snackBar.open(event.message, event.action, {
  //   //   duration: event.duration, verticalPosition: 'top', horizontalPosition: 'start'
  //   // });
  // }

}
