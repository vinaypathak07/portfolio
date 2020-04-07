import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '', redirectTo: '/home', pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then(mod => mod.HomeModule)
  },
  {
    path: 'skills',
    loadChildren: () => import('./skills/skills.module').then(mod => mod.SkillsModule)

  },
  {
    path: 'projects',
    loadChildren: () => import('./projects/projects.module').then(mod => mod.ProjectsModule)
  },
  {
    path: 'contact',
    loadChildren: () => import('./contact/contact.module').then(mod => mod.ContactModule)
  },
  {
    path: 'journey-so-far',
    loadChildren: () => import('./journey-so-far/journey-so-far.module').then(mod => mod.JourneySoFarModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
