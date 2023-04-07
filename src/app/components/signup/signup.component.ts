import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NgToastService } from 'ng-angular-popup';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {

  type: string = "password";
  isText: boolean = false;
  hide = true;

  isLoggedIn = false;
  isLoginFailed = false;
  errorMessage = '';

  form: FormGroup = this.fb.group({
    firstName: ['', Validators.required],
    lastName: ['', Validators.required],
    userName: ['', Validators.required],
    email: ['', Validators.required],
    password: ['', Validators.required]
  })

  private formSubmitAttempt!: boolean;

  constructor(
    private fb: FormBuilder,
    private service:AuthService,
    private router:Router,
    private toast: NgToastService)
  {}

  ngOnInit(): void {
  }

  hideShowPass(){
    this.isText = !this.isText;
    // this.isText ? this.eyeIcon = "fa-eye": this.eyeIcon = "fa-eye-slash";
    this.isText ? this.type = "text" : this.type = "password";
  }

  // submitTest(){;

  //   if(this.form.valid){
  //     console.log(this.form.value)
  //   } else{
  //     console.log('form is not Valid')
  //     ValidateForm.validateAllFormFileds(this.form)
  //     alert('Please validate')
  //   }
  // }


  isFieldInvalid(field: string){
    return (
      (!this.form.get(field)?.valid && this.form.get(field)?.touched) ||
      (this.form.get(field)?.untouched && this.formSubmitAttempt)
    )
  }
  // showSuccess() {
  //   this.toast.success({detail:"SUCCESS",summary:'Your Success Message',duration:'5000'});
  // }

  onSubmit(){
    debugger;
      console.log(this.form.value)
      this.service.signUp(this.form.value)
      .subscribe({
        next:(res)=>{
          debugger;
          // console.log(res.message)
          // this.form.reset()
          this.toast.success({detail: "SUCCESS", summary: res.message, duration: 5000})
          // this.router.navigate(['login'])
        },
        error:(err)=>{
          this.toast.error({detail: "ERROR", summary: "Something when wrong!"})
          console.log(err.message)
        }
      })
  }
}
