import { Component, OnInit } from '@angular/core';
import { ApplyThemeService } from '../shared/apply-theme.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {

  firstBackground: string;
  secondBackground: string;
  thirdBackground: string;
  constructor(private themeService: ApplyThemeService) { }

  ngOnInit() {}

  ngAfterViewInit() {
    this.themeService.captureTheme.subscribe((received: any) => {
      console.log(received);
      this.firstBackground = received.color;
      this.secondBackground = '-webkit-' + received.gradient;
      this.thirdBackground = received.gradient;
  });
 }
}
