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
import { DownloadPdfService } from './shared/download-pdf.service';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    CoreModule,
    HomeModule,
    HttpClientModule,
  ],
  providers: [SaveUserService, EmailValidationService, DownloadPdfService],
  bootstrap: [AppComponent]
})
export class AppModule { }
