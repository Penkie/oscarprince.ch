import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Project } from 'src/app/common/models/project.model';
import { ProjectsService } from 'src/app/common/services/projects.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent {

  public projects: Observable<Project[]>;

  constructor(
    private projectsService: ProjectsService
  ) {
    this.projects = this.projectsService.getProjects();
  }
}
