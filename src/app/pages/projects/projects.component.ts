import { Component, OnInit } from '@angular/core';
import { delay, map } from 'rxjs';
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
  public skeletonCount = Array.from({ length: 5 }, (_, i) => i);

  constructor(
    private projectsService: ProjectsService
  ) {}

  public ngOnInit(): void {
    this.projectsService.getProjects$()
      .pipe(
        map(projects => projects.sort((a, b) => a.order - b.order)),
        delay(150)
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
