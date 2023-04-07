import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderListingComponent } from './header-listing/header-listing.component';
import { MaterialModule } from '../material.module';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    HeaderListingComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule
  ],
  exports: [
    HeaderListingComponent
  ]
})
export class CoreModule { }
