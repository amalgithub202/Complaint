import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import { License } from './license';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  }),
};

@Injectable({
  providedIn: 'root'
})

export class LicenseService {
  public apiUrl = 'http://localhost:5000/api/License'
  private keepAfterNavigationChange = false;
  private subject = new Subject<any>();

  constructor(private http: HttpClient) { }

 success(message: string, keepAfterNavigationChange = false) {
    this.keepAfterNavigationChange = keepAfterNavigationChange;
    this.subject.next({ type: 'success', text: message });
  }

  error(message: string, keepAfterNavigationChange = false) {
    this.keepAfterNavigationChange = keepAfterNavigationChange;
    this.subject.next({ type: 'error', text: message });
  }

  getAll(): Observable<License[]> {
    return this.http.get<License[]>(this.apiUrl)
  }

  add(objet: License): Observable<License> {
    const url = `${this.apiUrl}`;
    return this.http.post<License>(url,objet)
  }

  update(license: License) : Observable<License> {
    const url = `${this.apiUrl}/${license.id}`;
    return this.http.put<License>(url, license, httpOptions);
  }
  getById(id:number): Observable<License> {
    return this.http.get<License>(this.apiUrl+"/"+id)
  }

  edit(objet: License) {
    const url = `${this.apiUrl}/${objet.id}`
    this.http.put<License>( url,objet, httpOptions)
  }

  delete(objet: License): Observable<License> {
    const url = `${this.apiUrl}/${objet.id}`;
    return this.http.delete<License>(url)
  }

}

