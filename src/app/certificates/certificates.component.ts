import { Component, OnInit } from '@angular/core';
import { ApplyThemeService } from '../shared/apply-theme.service';

@Component({
  selector: 'app-certificates',
  templateUrl: './certificates.component.html',
  styleUrls: ['./certificates.component.css']
})
export class CertificatesComponent implements OnInit {

  first: string;
  second: string;
  third: string;
  constructor(private themService: ApplyThemeService) { }

  certificateImgPath;

  ngOnInit() {

    setTimeout(() => {
      this.certificateImgPath = 'assets/Joule_Lab_Internship.jpg';
    }, 2000);

    this.themService.captureTheme.subscribe((received: any) => {
        this.first = received.color;
        this.second = '-webkit-' + received.gradient;
        this.third = received.gradient;
      });
  }
}
