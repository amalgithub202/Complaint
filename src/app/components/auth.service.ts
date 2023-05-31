import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject} from 'rxjs';


const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*'})
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private baseUrl: string = "http://localhost:5000/api/User/"
  private loggedIn = new BehaviorSubject<boolean>(false);

  constructor(private http: HttpClient, private router: Router) { }

  get isLoggedIn(){
    return this.loggedIn.asObservable();
  }


  login(obj: any){
   return this.http.post<any>(`${this.baseUrl}authenticate`,obj)
  }

  signUp(obj: any){
   return this.http.post<any>(`${this.baseUrl}register`,obj)
  }


  logout(){
    localStorage.clear();
  }
}
