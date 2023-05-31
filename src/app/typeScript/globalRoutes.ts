import { Injectable } from '@angular/core';
import { Routes } from '@angular/router';
import { EditComponent } from '../modulel/edit/edit.component';
import { ListingComponent } from '../modulel/listing/listing.component';

@Injectable({
  providedIn: 'root'
})

export class GlobalRoutes {
  static StandarRoutesModuleMmodule(EditComponent: EditComponent, ListingComponent: ListingComponent) {
    throw new Error('Method not implemented.');
  }
  constructor(){}

  public static createRoutesModule( component: any){
    return {
      path: 'create',
      component: component
    }
  }

  public static editRoutesModule( component: any){
    return {
      path: 'edit/:id',
      component: component
    }
  }

  public static listingRoutesModule( component: any){
    return {
      path:'',
      component: component
    }
  }

  public static standardRoutesModule( createEditComponent: any, listingComponent: any):Routes{
    return [
      {path: '', redirectTo:'customer', pathMatch: 'full'},
      GlobalRoutes.createRoutesModule(createEditComponent),
      GlobalRoutes.editRoutesModule(createEditComponent),
      GlobalRoutes.listingRoutesModule(listingComponent),
    ]
  }

  public static StandarRoutesModuleEmployee(  createEditComponent: any,employeeComponent: any) :Routes{
    return [
      {path: '', redirectTo:'employee', pathMatch: 'full'},
      GlobalRoutes.createRoutesModule(createEditComponent),
      GlobalRoutes.editRoutesModule(createEditComponent),
      GlobalRoutes.listingRoutesModule(employeeComponent),
    ]
  }
  public static StandarRoutesModuleStatus(  createEditComponent: any, employeeComponent: any) :Routes{
    return [
      {path: '', redirectTo:'status', pathMatch: 'full'},
      GlobalRoutes.createRoutesModule(createEditComponent),
      GlobalRoutes.editRoutesModule(createEditComponent),
      GlobalRoutes.listingRoutesModule(employeeComponent),
    ]
  }
  public static StandarRoutesModuleProduct( createEditComponent: any,  employeeComponent: any) :Routes{
    return [
      {path: '', redirectTo:'product', pathMatch: 'full'},
      GlobalRoutes.createRoutesModule(createEditComponent),
      GlobalRoutes.editRoutesModule(createEditComponent),
      GlobalRoutes.listingRoutesModule(employeeComponent),
    ]
  }
  public static standardRoutesComplaint( createEditComponent: any, listingComponent: any):Routes{
    return [
      {path: '', redirectTo:'complaint', pathMatch: 'full'},
      GlobalRoutes.createRoutesModule(createEditComponent),
      GlobalRoutes.editRoutesModule(createEditComponent),
      GlobalRoutes.listingRoutesModule(listingComponent),
    ]
  }
}
