import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { LoginComponent } from './components/login/login.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ComponentsModule } from './components/components.module';
// import { InterceptorService } from './components/interceptor.service';
import { FlexLayoutModule }from '@angular/flex-layout';
import { NavComponent } from './nav/nav.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CustomerModule } from './customer/customer.module';
import { EmployeModule } from './employe/employe.module';
import { StatusModule } from './status/status.module';
import { ProductModule } from './product/product.module';
import { LicenseModule } from './license/license.module';
import { ModulelModule } from './modulel/modulel.module'; 
import { ComplaintModule } from './complaint/complaint.module';
import { CoreModule } from './core/core.module'
import { NgToastModule } from 'ng-angular-popup'
import { MatDialogModule } from '@angular/material/dialog';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';



@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    LoginComponent,
    PageNotFoundComponent,
    NavComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MaterialModule,
    ComponentsModule,
    FlexLayoutModule,
    CustomerModule,
    EmployeModule,
    StatusModule,
    ProductModule,
    ComplaintModule,
    LicenseModule,
    ModulelModule,
    CoreModule,
    NgToastModule,
    MatDialogModule,
    MatNativeDateModule,
    MatDatepickerModule,
  ],
  providers: [
    // {provide: HTTP_INTERCEPTORS, useClass: InterceptorService , multi: true}
  ],
  bootstrap: [AppComponent],
  schemas:[NO_ERRORS_SCHEMA]

})
export class AppModule { }
