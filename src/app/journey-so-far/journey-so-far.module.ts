import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { JourneySoFarComponent } from './journey-so-far.component';
import { JourneySoFarRoutingModule } from './journey-so-far-routing.module';
import { MaterialModule } from '../material/material.module';

@NgModule({
  declarations: [
    JourneySoFarComponent
  ],
  imports: [
    CommonModule,
    JourneySoFarRoutingModule,
    MaterialModule
  ],
  exports: [
    JourneySoFarComponent
  ]
})
export class JourneySoFarModule { }
