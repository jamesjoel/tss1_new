import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { ViewstudentComponent } from './pages/viewstudent/viewstudent.component';
import { ViewteachersComponent } from './pages/viewteachers/viewteachers.component';
import { HomeComponent } from './pages/home/home.component';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { AboutComponent } from './pages/about/about.component';
import { Child1Component } from './shared/child1/child1.component';


@NgModule({
  declarations: [
    AdminComponent,
    ViewstudentComponent,
    ViewteachersComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    AboutComponent,
    Child1Component
  ],
  imports: [
    CommonModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }
