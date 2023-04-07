import { Component } from '@angular/core';
import { first, Observable } from 'rxjs';
import { AuthService } from '../components/auth.service';
// import { StorageService } from '../components/storage.service';
import { User } from '../components/User';
import { LoaderService } from '../loader/loader.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
})
export class SidebarComponent {

  // ngOnInit(): void {
  //   document.querySelectorAll('#sidebar .side-menu.topS li a').forEach(item => {
  //    const li = item.parentElement
  //      item.classList.toggle('active')
  //      item.addEventListener('click', ()=> {
  //        document.querySelectorAll('#sidebar .side-menu.topS li a').forEach(i => {
  //          i.parentElement?.classList.remove('active');
  //        })
  //        if(li != null){
  //          if(item.classList.contains('active')){
  //            li.classList.add('active')
  //          }
  //        }
  //      })
  //  })
  //  document.querySelector('#content nav .bx.bx-menu')?.addEventListener('click', ()=>{
  //    console.log('this')
  //    document.getElementById('sidebar')?.classList.toggle('hide')
  //  })
  //  if(window.innerWidth < 768){
  //    console.log('this<')
  //    document.getElementById('sidebar')?.classList.add('hide');
  //  }else if(window.innerWidth > 576){
  //    document.querySelector('#content nav form .form-input button .bx')?.classList.replace('bx-x', 'bx-search');
  //    document.querySelector('#content nav form')?.classList.remove('show')
  //  }
  //  window.addEventListener('resize', ()=> {
  //    if(innerWidth > 576){
  //      document.querySelector('#content nav form .form-input button .bx')?.classList.replace('bx-x', 'bx-search');
  //      document.querySelector('#content nav form')?.classList.remove('show')
  //    }
  //  })
  //  document.querySelector('#content nav form .form-input button')?.addEventListener('click', (e) =>{
  //    if(window.innerWidth < 576){
  //      console.log('Please chaimae')
  //      e.preventDefault();
  //      document.querySelector('#content nav form')?.classList.toggle('show')
  //      if(document.querySelector('#content nav form')?.classList.contains('show')){
  //        document.querySelector('#content nav form .form-input button .bx')?.classList.replace('bx-search', 'bx-x');
  //      }else {
  //        document.querySelector('#content nav form .form-input button .bx')?.classList.replace('bx-x', 'bx-search');
  //      }
  //    }
  //  })



  // //  document.querySelectorAll(".sidebar-list li")?.forEach((item) => {
  // //   item.addEventListener("click", () => {
  // //     let isActive = item.classList.contains("active");

  // //     document.querySelectorAll(".sidebar-list li")?.forEach((el) => {
  // //       el.classList.remove("active");
  // //     });

  // //     if (isActive) item.classList.remove("active");
  // //     else item.classList.add("active");
  // //   });
  // // });
  // // document.querySelector(".toggle-sidebar")?.addEventListener("click", () => {
  // //   document.querySelector(".sidebar")?.classList.toggle("close");
  // // });
  // // document.querySelector(".logo-box")?.addEventListener("click", () => {
  // //   document.querySelector(".sidebar")?.classList.toggle("close");
  // // });
  // }
  isLoggedIn!: Observable<boolean>;
user: User[] = [];
  connectedUser: User | undefined;

  constructor(public loaderService:LoaderService,private service: AuthService){
    // this.connectedUser = storage.getUser();
    console.log(this.connectedUser?.userName)
  }


  ngOnInit(): void {
    this.isLoggedIn = this.service.isLoggedIn;

    document.querySelectorAll('#sidebar .side-menu.topS li a').forEach(item => {
     const li = item.parentElement
       item.classList.toggle('active')
       item.addEventListener('click', ()=> {
         document.querySelectorAll('#sidebar .side-menu.topS li a').forEach(i => {
           i.parentElement?.classList.remove('active');
         })
         if(li != null){
           if(item.classList.contains('active')){
             li.classList.add('active')
           }
         }
       })
   })
   document.querySelector('#content nav .bx.bx-menu')?.addEventListener('click', ()=>{
     console.log('this')
     document.getElementById('sidebar')?.classList.toggle('hide')
   })
  //  document.querySelector('#content .main')?.addEventListener('click', ()=>{
  //    console.log('this')
  //    document.getElementById('content')?.classList.toggle('hide')
  //  })
  //  document.querySelector('#content .main')?.addEventListener('click', ()=>{
  //   document.getElementById('sidebar')?.classList.toggle('hide')
  //  })

   if(window.innerWidth < 768){
     console.log('this<')
     document.getElementById('sidebar')?.classList.add('hide');
   }else if(window.innerWidth > 576){
     document.querySelector('#content nav form .form-input button .bx')?.classList.replace('bx-x', 'bx-search');
     document.querySelector('#content nav form')?.classList.remove('show')
   }
   window.addEventListener('resize', ()=> {
     if(innerWidth > 576){
       document.querySelector('#content nav form .form-input button .bx')?.classList.replace('bx-x', 'bx-search');
       document.querySelector('#content nav form')?.classList.remove('show')
     }
   })
   document.querySelector('#content nav form .form-input button')?.addEventListener('click', (e) =>{
     if(window.innerWidth < 576){
       console.log('Please chaimae')
       e.preventDefault();
       document.querySelector('#content nav form')?.classList.toggle('show')
       if(document.querySelector('#content nav form')?.classList.contains('show')){
         document.querySelector('#content nav form .form-input button .bx')?.classList.replace('bx-search', 'bx-x');
       }else {
         document.querySelector('#content nav form .form-input button .bx')?.classList.replace('bx-x', 'bx-search');
       }
     }
   })



  }
  onLogout(){
    this.service.logout();
  }
  // get token(){
  //   return this.storage.getuserKey();
  // }
}
