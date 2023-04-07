import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Product } from './product';


const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  }),
};
@Injectable({
  providedIn: 'root'
})
export class ProductService {

  public apiUrl = 'https://localhost:7284/Product'
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

  getAll(): Observable<Product[]> {
    return this.http.get<Product[]>(this.apiUrl)
  }

  add(object: Product): Observable<Product> {
    const url = `${this.apiUrl}`;
    return this.http.post<Product>(url,object)
  }

  update(object: Product) : Observable<Product> {
    const url = `${this.apiUrl}/${object.id}`;
    return this.http.put<Product>(url, object, httpOptions);
  }
  getById(id:number): Observable<Product> {
    return this.http.get<Product>(this.apiUrl+"/"+id)
  }

  edit(object: Product) {
    const url = `${this.apiUrl}/${object.id}`
    this.http.put<Product>( url,object, httpOptions)
  }

  delete(object: Product): Observable<Product> {
    const url = `${this.apiUrl}/${object.id}`;
    return this.http.delete<Product>(url)
  }
}
