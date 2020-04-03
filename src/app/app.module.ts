import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CoreModule } from './core/core.module';
import { HomeModule } from './home/home.module';
import { SaveUserService } from './shared/save-user.service';
import { HttpClientModule } from '@angular/common/http';
import { EmailValidationService } from './shared/email-validation.service';
import { environment } from '../environments/environment';
import * as firebase from 'firebase/app';
import 'firebase/storage';
import { SidebarComponent } from './sidebar/sidebar.component';
import { MaterialModule } from './material/material.module';
firebase.initializeApp(environment.firebase);
@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    CoreModule,
    HomeModule,
    HttpClientModule,
    MaterialModule
  ],
  providers: [SaveUserService, EmailValidationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
