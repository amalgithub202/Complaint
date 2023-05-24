import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Status } from './status';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  }),
};

@Injectable({
  providedIn: 'root'
})
export class StatusService {

  public apiUrl = 'http://localhost:5000/Status'
  private keepAfterNavigationChange = false;
  private subject = new Subject<any>();


  constructor(private http: HttpClient) {}

  success(message: string, keepAfterNavigationChange = false) {
    this.keepAfterNavigationChange = keepAfterNavigationChange;
    this.subject.next({ type: 'success', text: message });
  }

  error(message: string, keepAfterNavigationChange = false) {
    this.keepAfterNavigationChange = keepAfterNavigationChange;
    this.subject.next({ type: 'error', text: message });
  }

  getAll(): Observable<Status[]> {
    return this.http.get<Status[]>(this.apiUrl)
  }

  add(object: Status): Observable<Status> {
    const url = `${this.apiUrl}`;
    return this.http.post<Status>(url,object)
  }

  update(object: Status) : Observable<Status> {
    const url = `${this.apiUrl}/${object.id}`;
    return this.http.put<Status>(url, object, httpOptions);
  }
  getById(id:number): Observable<Status> {
    return this.http.get<Status>(this.apiUrl+"/"+id)
  }

  edit(object: Status) {
    const url = `${this.apiUrl}/${object.id}`
    this.http.put<Status>( url,object, httpOptions)
  }

  delete(object: Status): Observable<Status> {
    const url = `${this.apiUrl}/${object.id}`;
    return this.http.delete<Status>(url)
  }


}
