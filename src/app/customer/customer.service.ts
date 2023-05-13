import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Customer } from './customer';
import { MatDialog } from '@angular/material/dialog';
import { DeleteComponent } from './delete/delete.component';


const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  }),
};

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  public apiUrl = ' http://localhost:5000/Customer'
  private subject = new Subject<any>();
  private keepAfterNavigationChange = false;

  constructor(private http: HttpClient) {

  }

  getAll(): Observable<Customer[]> {
    return this.http.get<Customer[]>(this.apiUrl)
  }

  getById(id:number): Observable<Customer> {
    return this.http.get<Customer>(this.apiUrl+"/"+id)
  }

  add(customer: Customer): Observable<Customer> {
    const url = `${this.apiUrl}`;
    return this.http.post<Customer>(url,customer)
  }

  delete(customer: Customer): Observable<Customer> {
    const url = `${this.apiUrl}/${customer.id}`;
    return this.http.delete<Customer>(url)
  }

  update(customer: Customer) : Observable<Customer> {
    const url = `${this.apiUrl}/${customer.id}`;
    return this.http.put<Customer>(url, customer, httpOptions);
  }


  success(message: string, keepAfterNavigationChange = false) {
    this.keepAfterNavigationChange = keepAfterNavigationChange;
    this.subject.next({ type: 'success', text: message });
  }

  error(message: string, keepAfterNavigationChange = false) {
    this.keepAfterNavigationChange = keepAfterNavigationChange;
    this.subject.next({ type: 'error', text: message });
  }
/*
c'est equivalant de delete in this file 
  deleteData(id:string) : Observable<Customer> {
    return this.http.delete<Customer>('${this.apiUrl}/delete/${id}');
  }*/

}
