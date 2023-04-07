import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// import { AuthGuard } from './auth.guard';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { SidebarComponent } from './sidebar/sidebar.component';

const routes: Routes = [
  { path: '', component: DashboardComponent , pathMatch: 'full'},
  { path: 'login', component: LoginComponent},
  { path: 'signup', component: SignupComponent},
  // { path: '**', component: PageNotFoundComponent},
  { path:'customer',
    loadChildren: () => import ('./customer/customer.module').then(m => m.CustomerModule)
  },
  {
    path: 'employee',
    loadChildren: () => import ('./employe/employe.module').then(m => m.EmployeModule)
  },
  {
    path: 'status',
    loadChildren: () => import ('./status/status.module').then(m => m.StatusModule)
  },
  {
    path: 'product',
    loadChildren: () => import ('./product/product.module').then(m => m.ProductModule)
  },
  {
    path: 'complaint',
    loadChildren: () => import ('./complaint/complaint.module').then(m => m.ComplaintModule)
  },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
