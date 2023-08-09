import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { PagesComponent } from './pages.component';
import { HomeComponent } from './home/home.component';
import { ProjectsComponent } from './projects/projects.component';
import { ConsoleComponent } from './home/components/console/console.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    PagesComponent,
    HomeComponent,
    ProjectsComponent,
    ConsoleComponent
  ],
  imports: [
    CommonModule,
    PagesRoutingModule,
    FormsModule
  ]
})
export class PagesModule { }
