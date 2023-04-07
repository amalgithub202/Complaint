import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  // ngOnInit(): void {

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
}
