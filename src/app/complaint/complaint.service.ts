import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Complaint } from './complaint';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  }),
};

@Injectable({
  providedIn: 'root'
})
export class ComplaintService {

  public apiUrl = 'http://localhost:5000/api/Complaint/'
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

  getAll(): Observable<Complaint[]> {
    return this.http.get<Complaint[]>(this.apiUrl+'GetAll')
  }

  add(object: Complaint): Observable<Complaint> {
    const url = `${this.apiUrl}`;
    return this.http.post<Complaint>(url+'Add',object)
  }

  update(object: Complaint) : Observable<Complaint> {
    const url = `${this.apiUrl}/${object.id}`;
    return this.http.put<Complaint>(url, object, httpOptions);
  }
  getById(id:number): Observable<Complaint> {
    return this.http.get<Complaint>(this.apiUrl+"/"+id)
  }

  edit(object: Complaint) {
    const url = `${this.apiUrl}/${object.id}`
    this.http.put<Complaint>( url,object, httpOptions)
  }

  delete(object: Complaint): Observable<Complaint> {
    const url = `${this.apiUrl}/${object.id}`;
    return this.http.delete<Complaint>(url)
  }
}
