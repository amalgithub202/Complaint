import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import ValidateForm from 'src/app/helpers/validateform';
import { AuthService } from '../auth.service';
import { NgToastService } from 'ng-angular-popup';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  type: string = "password";
  isText: boolean = false;
  eyeIcon: string = "fa-eye-slash";

  isLoggedIn = false;
  isLoginFailed = false;
  errorMessage = '';
  form!: FormGroup;

  private formSubmitAttempt!: boolean;

  constructor(
    private fb: FormBuilder,
    private service:AuthService,
    private router:Router,
    private toast: NgToastService)
  {}

  ngOnInit(): void {
    this.initForm();
  }

  hideShowPass(){
    this.isText = !this.isText;
    this.isText ? this.eyeIcon = "fa-eye": this.eyeIcon = "fa-eye-slash";
    this.isText ? this.type = "text" : this.type = "password";
  }


  initForm(){
    this.form = this.fb.group({
      userName: ['', Validators.required],
      password: ['', Validators.required]
    })
  }

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
    if(this.form.valid){
      console.log(this.form.value)
      this.service.login(this.form.value)
      .subscribe({
        next:(res)=>{
          debugger;
          console.log(res.message)
          this.form.reset()
          this.toast.success({detail: "SUCCESS", summary: res.message, duration: 5000})
          this.router.navigate([''])
        },
        error:(err)=>{
          this.toast.error({detail: "ERROR", summary: "Something when wrong!"})
          console.log(err.message)
        }
      })
    }
  }
}
