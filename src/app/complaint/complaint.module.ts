import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DeleteComponent } from './delete/delete.component';
import { EditComponent } from './edit/edit.component';
import { RouterModule, Routes } from '@angular/router';
import { ListingComponent } from './listing/listing.component';
import { GlobalRoutes } from '../typeScript/globalRoutes';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../material.module';
import { CoreModule } from '../core/core.module';
import { MatAutocompleteModule } from '@angular/material/autocomplete';

const appRoutes: Routes = [
  ...GlobalRoutes.standardRoutesComplaint(EditComponent, ListingComponent)
]

@NgModule({
  declarations: [
    DeleteComponent,
    EditComponent,
    ListingComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    CoreModule,
    FormsModule,
    ReactiveFormsModule,
    MatAutocompleteModule,
    RouterModule.forChild(appRoutes),
    ReactiveFormsModule.withConfig({warnOnNgModelWithFormControl: 'never'})

  ],
  providers: [],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class ComplaintModule { }
