import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Employe } from './employe';


const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  }),
};

@Injectable({
  providedIn: 'root'
})
export class EmployeService {

  public apiUrl = 'https://localhost:7284/Employe'
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

  getAll(): Observable<Employe[]> {
    return this.http.get<Employe[]>(this.apiUrl)
  }

  add(objet: Employe): Observable<Employe> {
    const url = `${this.apiUrl}`;
    return this.http.post<Employe>(url,objet)
  }

  update(employee: Employe) : Observable<Employe> {
    const url = `${this.apiUrl}/${employee.id}`;
    return this.http.put<Employe>(url, employee, httpOptions);
  }
  getById(id:number): Observable<Employe> {
    return this.http.get<Employe>(this.apiUrl+"/"+id)
  }

  edit(objet: Employe) {
    const url = `${this.apiUrl}/${objet.id}`
    this.http.put<Employe>( url,objet, httpOptions)
  }

  delete(objet: Employe): Observable<Employe> {
    const url = `${this.apiUrl}/${objet.id}`;
    return this.http.delete<Employe>(url)
  }


}
