import { NgModule, CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import { CommonModule } from '@angular/common';
import { DeleteComponent } from './delete/delete.component';
import { EditComponent } from './edit/edit.component';
import { ListingComponent } from './listing/listing.component';
import { MaterialModule } from '../material.module';
import { GlobalRoutes } from '../typeScript/globalRoutes';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { CoreModule } from '../core/core.module';

const appRoutes: Routes = [
  ...GlobalRoutes.StandarRoutesModuleLicense(EditComponent, ListingComponent)
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
    FormsModule,
    ReactiveFormsModule,
    MatIconModule,
    RouterModule.forChild(appRoutes),
    CoreModule,
    
  ],
  providers: [],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class LicenseModule { }
