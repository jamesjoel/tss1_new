import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './pages/home/home.component';
import { HelpComponent } from './pages/help/help.component';
import { ContactComponent } from './pages/contact/contact.component';
import { AboutComponent } from './pages/about/about.component';
import { EmployeeComponent } from './pages/employee/employee.component';
import { ProductsComponent } from './pages/products/products.component';
import { StudentComponent } from './pages/student/student.component';
import { Event1Component } from './pages/event1/event1.component';
import { Event2Component } from './pages/event2/event2.component';
import { Event3Component } from './pages/event3/event3.component';


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
  },
  {
    path : "student",
    component : StudentComponent
  },
  {
    path : "event1",
    component : Event1Component
  },
  {
    path : "event2",
    component : Event2Component
  },
  {
    path : "event3",
    component : Event3Component
  }
  
];




@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
