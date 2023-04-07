import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { GlobalRoutes } from '../typeScript/globalRoutes';
import { ListingComponent } from './listing/listing.component';
import { EditComponent } from './edit/edit.component';
import { DeleteComponent } from './delete/delete.component';
import { CoreModule } from '../core/core.module';

const appRoutes: Routes = [
  ...GlobalRoutes.StandarRoutesModuleEmployee(EditComponent, ListingComponent)
]

@NgModule({
  declarations: [
    ListingComponent,
    EditComponent,
    DeleteComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    CoreModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(appRoutes)
  ]
})
export class EmployeModule { }
