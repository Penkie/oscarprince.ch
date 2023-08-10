import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Project } from 'src/app/common/models/project.model';
import { ProjectsService } from 'src/app/common/services/projects.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {

  public projects: Project[] = [];

  constructor(
    private projectsService: ProjectsService
  ) {}

  public ngOnInit(): void {
    this.projectsService.getProjects$()
      .subscribe(projects => {
        this.projects = projects;
      });
  }
}
