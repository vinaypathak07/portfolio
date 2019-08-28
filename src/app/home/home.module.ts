import { NgModule } from '@angular/core';
import { HomeComponent } from './home.component';
import { MaterialModule } from '../material/material.module';
import { CommonModule } from '@angular/common';
import { DownloadDialogComponent } from './download-dialog/download-dialog.component';
import { ReactiveFormsModule } from '@angular/forms';

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
    providers: [],
    bootstrap: []
})

export class HomeModule { }
