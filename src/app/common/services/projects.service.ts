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

  private API_URL = `${environment.API_URL}`;

  constructor(
    private http: HttpClient
  ) { }

  public getProjects$(): Observable<Project[]> {
    return this.http.get<Array<Project>>(`${this.API_URL}/projects`);
  }

}
