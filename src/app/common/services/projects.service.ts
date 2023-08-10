import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { Project } from '../models/project.model';
import { Pageable } from '../models/pageable.model';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {

  private API_URL = `${environment.API_URL}/api/collections/projects/records`;

  constructor(
    private http: HttpClient
  ) { }

  public getProjects$(): Observable<Project[]> {
    return this.http.get<Pageable<Project>>(this.API_URL)
      .pipe(
        map(pageable => pageable.items)
      );
  }
}
