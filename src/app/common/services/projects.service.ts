import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, combineLatest, concat, concatMap, map, mergeMap, of, switchMap, tap, zip, zipWith } from 'rxjs';
import { Project } from '../models/project.model';
import { Pageable } from '../models/pageable.model';
import { environment } from 'src/environments/environment.development';
import { Technology } from '../models/technology.model';
import { ProjectTechnology } from '../models/project-technology.model';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {

  private API_URL = `${environment.API_URL}/api/collections`;

  constructor(
    private http: HttpClient
  ) { }

  public getProjects$(): Observable<Project[]> {
    return zip(this.getTechnologies(), this.http.get<Pageable<Project>>(`${this.API_URL}/project/records?perPage=120`).pipe(map(pageable => pageable.items)), this.getProjectsTechnologiesLinks())
      .pipe(
        tap(values => {
          values[1].map(project => {
            const projectLinks = values[2].filter((e) => e.project === project.id);
            const techonolgies: Array<Technology> = [];
            projectLinks.forEach(e => {
              const technology = values[0].find((i) => i.id === e.technology);
              if (technology) {
                techonolgies.push(technology);
              }
            });
            project.technologies = techonolgies;
          })
        }),
        map(values => values[1])
      );
  }

  public getProjectsTechnologiesLinks(): Observable<ProjectTechnology[]> {
    return this.http.get<Pageable<ProjectTechnology>>(`${this.API_URL}/project_technology/records?perPage=120`)
      .pipe(
        map(pageable => pageable.items)
      );
  }

  public getTechnologies(): Observable<Technology[]> {
    return this.http.get<Pageable<Technology>>(`${this.API_URL}/technology/records?perPage=120`)
      .pipe(
        map(pageable => pageable.items)
      );
  }
}
