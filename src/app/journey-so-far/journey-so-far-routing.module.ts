import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { JourneySoFarComponent } from './journey-so-far.component';

const routes: Routes = [
    {
        path: '',
        component: JourneySoFarComponent
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class JourneySoFarRoutingModule { }