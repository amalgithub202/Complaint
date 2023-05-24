import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { MaterialModule } from '../material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { GlobalRoutes } from '../typeScript/globalRoutes';
import { ListingComponent } from './listing/listing.component';
import { EditComponent } from './edit/edit.component';
import { DeleteComponent } from './delete/delete.component';
import { CoreModule } from '../core/core.module';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatFormFieldModule } from "@angular/material/form-field";


const appRoutes: Routes = [
  ...GlobalRoutes.standardRoutesModule(EditComponent, ListingComponent)
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
    MatFormFieldModule,
    ReactiveFormsModule,
    MatAutocompleteModule,
    RouterModule.forChild(appRoutes),
    ReactiveFormsModule.withConfig({warnOnNgModelWithFormControl: 'never'}),
  ],
  
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class ModulelModule { }
