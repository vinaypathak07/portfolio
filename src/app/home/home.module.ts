import { NgModule } from '@angular/core';
import { HomeComponent } from './home.component';
import { MaterialModule } from '../material/material.module';
import { CommonModule } from '@angular/common';
import { DownloadDialogComponent } from './download-dialog/download-dialog.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SendMailService } from '../shared/send-mail.service';

@NgModule({
    declarations : [
        HomeComponent,
        DownloadDialogComponent
    ],
    imports: [
        CommonModule,
        MaterialModule,
        ReactiveFormsModule
    ],
    exports: [
        HomeComponent
    ],
    entryComponents: [DownloadDialogComponent],
    providers: [SendMailService],
    bootstrap: []
})

export class HomeModule { }
