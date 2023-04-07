import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthService } from './components/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'WebApp';
  isLoggedIn!: Observable<boolean>;


  constructor(private service: AuthService){}

  // ngOnInit(){
  //   this.isLoggedIn = this.service.isLoggedIn;
  //   console.log(this.isLoggedIn)
  // }

}
