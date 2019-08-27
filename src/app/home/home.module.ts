import { NgModule } from '@angular/core';
import { HomeComponent } from './home.component';
import { MaterialModule } from '../material/material.module';
import { CommonModule } from '@angular/common';

@NgModule({
    declarations : [
        HomeComponent
    ],
    imports: [
        CommonModule,
        MaterialModule
    ],
    exports: [
        HomeComponent
    ],
    providers: [],
    bootstrap: []
})

export class HomeModule { }
