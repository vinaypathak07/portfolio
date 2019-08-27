import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeaderPresenterComponent } from './header-presenter/header-presenter.component';
import { FooterPresenterComponent } from './footer-presenter/footer-presenter.component';
import { RouterModule } from '@angular/router';
import { MaterialModule } from '../material/material.module';


@NgModule({
  declarations: [
    HeaderPresenterComponent,
    FooterPresenterComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    MaterialModule
  ],
  exports: [
    HeaderPresenterComponent,
    FooterPresenterComponent
  ],
  providers: [],
  bootstrap: []
})
export class CoreModule { }
