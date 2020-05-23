import { NgModule } from '@angular/core';
import { HomeComponent } from './home.component';
import { MaterialModule } from '../material/material.module';
import { CommonModule } from '@angular/common';
import { DownloadDialogComponent } from './download-dialog/download-dialog.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SendMailService } from '../shared/send-mail.service';
import { HomeRoutingModule } from './home-routing.module';
import { ViewOneComponent } from './view-one/view-one.component';
import { ViewTwoComponent } from './view-two/view-two.component';



@NgModule({
    declarations : [
        HomeComponent,
        DownloadDialogComponent,
        ViewOneComponent,
        ViewTwoComponent,
    ],
    imports: [
        CommonModule,
        MaterialModule,
        ReactiveFormsModule,
        HomeRoutingModule,
    ],
    exports: [
        HomeComponent
    ],
    entryComponents: [DownloadDialogComponent],
    providers: [SendMailService],
    bootstrap: []
})

export class HomeModule { }
