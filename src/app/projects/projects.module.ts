import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material/material.module';
import { ReactiveFormsModule } from '@angular/forms';
import { ProjectsComponent } from './projects.component';
import { ProjectsRoutingModule } from './projects-routing.module';

@NgModule({
    declarations : [
        ProjectsComponent
    ],
    imports: [
        CommonModule,
        MaterialModule,
        ReactiveFormsModule,
        ProjectsRoutingModule,
    ],
    exports: [
        ProjectsComponent
    ],
    providers: [],
    bootstrap: [],
})

export class ProjectsModule { }
