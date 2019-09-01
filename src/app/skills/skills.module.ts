import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material/material.module';
import { SkillsRoutingModule } from './skills-routing.module';
import { SkillsComponent } from './skills.component';

@NgModule({
    declarations : [
        SkillsComponent
    ],
    imports: [
        CommonModule,
        MaterialModule,
        SkillsRoutingModule
    ],
    exports: [
        SkillsComponent
    ],
    providers: [],
    bootstrap: [],
})

export class SkillsModule { }
