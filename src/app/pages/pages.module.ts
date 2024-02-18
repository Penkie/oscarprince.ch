import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { PagesComponent } from './pages.component';
import { HomeComponent } from './home/home.component';
import { ProjectsComponent } from './projects/projects.component';
import { ConsoleComponent } from './home/components/console/console.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ContactComponent } from './contact/contact.component';
import { ErrorComponent } from '../common/components/error/error.component';


@NgModule({
  declarations: [
    PagesComponent,
    HomeComponent,
    ProjectsComponent,
    ContactComponent,
    ConsoleComponent
  ],
  imports: [
    CommonModule,
    PagesRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    ErrorComponent
  ]
})
export class PagesModule { }
