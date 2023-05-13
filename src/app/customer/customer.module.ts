import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { GlobalRoutes } from '../typeScript/globalRoutes';
import { EditComponent } from './edit/edit.component';
import { ListingComponent } from './listing/listing.component';
import { DeleteComponent } from './delete/delete.component';
import { CoreModule } from '../core/core.module';
import { MatIconModule } from '@angular/material/icon';

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
      ReactiveFormsModule,
      RouterModule.forChild(appRoutes),
      MatIconModule,
    ]
})
export class CustomerModule { }
