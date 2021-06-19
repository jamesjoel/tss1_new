import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './pages/home/home.component';
import { HelpComponent } from './pages/help/help.component';
import { ContactComponent } from './pages/contact/contact.component';
import { AboutComponent } from './pages/about/about.component';
import { EmployeeComponent } from './pages/employee/employee.component';
import { ProductsComponent } from './pages/products/products.component';


const routes: Routes = [
  {
    path : "",
    component : HomeComponent  
  },
  {
    path : "about",
    component : AboutComponent
  },
  {
    path : "contact",
    component : ContactComponent
  },
  {
    path : "help",
    component : HelpComponent
  },
  {
    path : "employee",
    component : EmployeeComponent
  },
  {
    path : "product",
    component : ProductsComponent
  }
];




@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
