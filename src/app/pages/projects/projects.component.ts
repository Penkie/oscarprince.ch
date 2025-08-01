import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs';
import { Project } from 'src/app/common/models/project.model';
import { ProjectsService } from 'src/app/common/services/projects.service';

@Component({
    selector: 'app-projects',
    templateUrl: './projects.component.html',
    styleUrls: ['./projects.component.scss'],
    standalone: false
})
export class ProjectsComponent implements OnInit {

  public projects: Project[] = [];
  public errorLoading = false;

  constructor(
    private projectsService: ProjectsService
  ) {}

  public ngOnInit(): void {
    this.projectsService.getProjects$()
      .pipe(
        map(projects => projects.sort((a, b) => a.order - b.order))
      )
      .subscribe({
        next: (projects) => {
          this.projects = projects
        },
        error: (err) => {
          this.errorLoading = true;
        }
      });
  }
}
