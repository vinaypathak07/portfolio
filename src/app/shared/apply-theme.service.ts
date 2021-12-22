import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApplyThemeService {

  constructor() { }

  theme : string;
  captureTheme = new Subject();

  // themeColor(arg: string) {
  //   this.theme = arg;
  // }

  setThemeColor(theme: {}) {
    this.captureTheme.next(theme);
  }

}
