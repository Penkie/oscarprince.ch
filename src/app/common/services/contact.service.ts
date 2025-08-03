import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.development';
import { Contact } from '../models/contact.model';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  private API_URL = `${environment.API_URL}`;

  constructor(
    private http: HttpClient
  ) { }

  public newContactForm(name: string, email: string, message: string): Observable<Contact> {
    return this.http.post<Contact>(`${this.API_URL}/contact`, { name, text: message, email });
  }
}
