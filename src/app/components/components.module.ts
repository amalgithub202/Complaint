import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignupComponent } from './signup/signup.component';



@NgModule({
  declarations: [
    SignupComponent
  ],
  imports: [
    CommonModule
  ],
  schemas:[NO_ERRORS_SCHEMA]
})
export class ComponentsModule { }
