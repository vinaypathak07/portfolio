import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ApplyThemeService } from '../shared/apply-theme.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  contactForm: FormGroup;

  firstBackground: string;
  secondBackground: string;
  thirdBackground: string;

  constructor(private themeService: ApplyThemeService) {
    this.contactForm = new FormGroup({
      name: new FormControl(null, Validators.required),
      email: new FormControl(null, [Validators.required, Validators.email]),
      message: new FormControl(null, Validators.required),
    });

    this.themeService.captureTheme.subscribe((received: any) => {
      this.firstBackground = received.color;
      this.secondBackground = '-webkit-' + received.gradient;
      this.thirdBackground = received.gradient;
    });
  }

  ngOnInit() {

  }

  contact() {

  }

}
