import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListingComponent } from './listing/listing.component';
import { EditComponent } from './edit/edit.component';
import { DeleteComponent } from './delete/delete.component';
import { GlobalRoutes } from '../typeScript/globalRoutes';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../material.module';
import { CoreModule } from '../core/core.module';

const appRoutes: Routes = [
  ...GlobalRoutes.StandarRoutesModuleStatus(EditComponent, ListingComponent)
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
    FormsModule,
    CoreModule,
    ReactiveFormsModule,
    RouterModule.forChild(appRoutes)
  ]
})
export class StatusModule { }
