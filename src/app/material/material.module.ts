import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';


import {
    MatToolbarModule,
    MatButtonModule,
    MatCardModule,
    MatMenuModule,
    MatSidenavModule,
    MatIconModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatSnackBarModule,
    MatListModule
} from '@angular/material';

@NgModule({
    imports: [
        CommonModule,
        MatToolbarModule,
        MatButtonModule,
        MatCardModule,
        MatMenuModule,
        MatSidenavModule,
        MatIconModule,
        MatDialogModule,
        MatFormFieldModule,
        MatInputModule,
        MatSnackBarModule,
        MatListModule
    ],
    exports: [
        CommonModule,
        MatToolbarModule,
        MatButtonModule,
        MatCardModule,
        MatMenuModule,
        MatSidenavModule,
        MatIconModule,
        MatFormFieldModule,
        MatDialogModule,
        MatInputModule,
        MatListModule
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})

export class MaterialModule { }
