import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import { Modulel } from './modulel'; 
//import

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  }),
};

@Injectable({
  providedIn: 'root'
})
export class ModulelService {

  public apiUrl = 'http://localhost:5000/Module'
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

  getAll(): Observable<Modulel[]> {
    return this.http.get<Modulel[]>(this.apiUrl+'/Get')
  }

  add(objet: Modulel|any): Observable<Modulel> {
    
    let params = new URLSearchParams();
    for(let key in objet){
        params.set(key, objet[key]) 
    }
    const url = `${this.apiUrl+'/AddModule?' + params}`;
    return this.http.post<Modulel>(url,{})
  }
  update(employee: Modulel) : Observable<Modulel> { 
    const url = `${this.apiUrl}/${employee.id}`;
    return this.http.put<Modulel>(url, employee, httpOptions);
  }
  getById(id:number): Observable<Modulel> {
    return this.http.get<Modulel>(this.apiUrl+"/"+id)
  }

  edit(objet: Modulel) {
    const url = `${this.apiUrl}/${objet.id}`
    this.http.put<Modulel>( url,objet, httpOptions)
  }

  delete(objet: Modulel): Observable<Modulel> {
    const url = `${this.apiUrl}/${objet.id}`;
    return this.http.delete<Modulel>(url)
  }
}
