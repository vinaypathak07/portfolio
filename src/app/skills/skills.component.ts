import { Component, OnInit } from '@angular/core';
import { ApplyThemeService } from '../shared/apply-theme.service';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {
  firstBackground: string;
  secondBackground: string;
  thirdBackground: string;
  constructor(private themeService: ApplyThemeService) {
    console.log('constructor');
   }

  ngOnInit() {
    this.themeService.captureTheme.subscribe((received: any) => {
      this.firstBackground = received.color;
      this.secondBackground = '-webkit-' + received.gradient;
      this.thirdBackground = received.gradient;
    });
  }

}
