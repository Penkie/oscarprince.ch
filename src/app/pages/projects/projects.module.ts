import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectsComponent } from './projects.component';
import { ProjectsRoutingModule } from './projects-routing.module';
import { RemoveHttpStringPipe } from 'src/app/common/utils/remove-http-string.pipe';
import { ErrorComponent } from 'src/app/common/components/error/error.component';



@NgModule({
  declarations: [
    ProjectsComponent
  ],
  imports: [
    CommonModule,
    ProjectsRoutingModule,
    RemoveHttpStringPipe,
    ErrorComponent
  ]
})
export class ProjectsModule { }
