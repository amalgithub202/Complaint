import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { GlobalRoutes } from '../typeScript/globalRoutes';
import { ListingComponent } from './listing/listing.component';
import { EditComponent } from './edit/edit.component';
import { DeleteComponent } from './delete/delete.component';
import { CoreModule } from '../core/core.module';
import { MatOptionModule } from '@angular/material/core';
import { MatAutocompleteModule } from '@angular/material/autocomplete';


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
    RouterModule.forChild(appRoutes),
    MatOptionModule,
    MatAutocompleteModule,
  ],
  providers: [],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class EmployeModule { }
