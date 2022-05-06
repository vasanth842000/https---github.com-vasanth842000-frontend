import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateEmployeeComponent } from './create-employee/create-employee.component';
import { EmployeeComponent } from './employee/employee.component';
import { ListingComponent } from './listing/listing.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { WelcomeComponent } from './welcome/welcome.component';

const routes: Routes = [
  {path:'employees', component:EmployeeComponent},
  {path:'create-employee',component:CreateEmployeeComponent},
  {path:'login-form',component:LoginPageComponent},
  {path:'all-list',component:ListingComponent},
  {path:'login',component:CreateEmployeeComponent},
  {path:'login-form/employees',component:EmployeeComponent},
  {path:'list',component:EmployeeComponent},
  {path:'',component:WelcomeComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
