import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PagesComponent } from './pages.component';
import { HomeComponent } from './home/home.component';
import { ProjectsComponent } from './projects/projects.component';
import { ContactComponent } from './contact/contact.component';

const routes: Routes = [
  { path: '', component: PagesComponent, children: [
    {
      path: '', loadChildren: () => import('./home/home.module').then(m => m.HomeModule)
    },
    {
      path: 'projects', loadChildren: () => import('./projects/projects.module').then(m => m.ProjectsModule)
    },
    {
      path: 'contact', loadChildren: () => import('./contact/contact.module').then(m => m.ContactModule)
    }
  ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
