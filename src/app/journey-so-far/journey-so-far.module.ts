import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { JourneySoFarComponent } from './journey-so-far.component';
import { JourneySoFarRoutingModule } from './journey-so-far-routing.module';

@NgModule({
  declarations: [
    JourneySoFarComponent
  ],
  imports: [
    CommonModule,
    JourneySoFarRoutingModule
  ],
  exports: [
    JourneySoFarComponent
  ]
})
export class JourneySoFarModule { }
