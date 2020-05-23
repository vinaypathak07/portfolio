import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '', redirectTo: '/home', pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then(mod => mod.HomeModule),
    data : { animation:  'home'}
  },
  {
    path: 'skills',
    loadChildren: () => import('./skills/skills.module').then(mod => mod.SkillsModule),
    data : { animation:  'skills'}
  },
  {
    path: 'projects',
    loadChildren: () => import('./projects/projects.module').then(mod => mod.ProjectsModule),
    data : { animation:  'projects'}
  },
  {
    path: 'contact',
    loadChildren: () => import('./contact/contact.module').then(mod => mod.ContactModule),
    data : { animation:  'contact'}
  },
  {
    path: 'journey-so-far',
    loadChildren: () => import('./journey-so-far/journey-so-far.module').then(mod => mod.JourneySoFarModule),
    data : { animation:  'journey-so-far'}
  },
  {
    path: 'certificates',
    loadChildren: () => import('./certificates/certificates.module').then(mod => mod.CertificatesModule),
    data : { animation:  'certificates'}
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
