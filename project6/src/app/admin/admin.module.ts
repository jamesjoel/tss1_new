import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { HttpClientModule } from '@angular/common/http';
import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { ViewstudentComponent } from './pages/viewstudent/viewstudent.component';
import { ViewteachersComponent } from './pages/viewteachers/viewteachers.component';
import { HomeComponent } from './pages/home/home.component';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { AboutComponent } from './pages/about/about.component';
import { Child1Component } from './shared/child1/child1.component';
import { FileuploadComponent } from './pages/fileupload/fileupload.component';
import { LoginComponent } from './pages/login/login.component';


@NgModule({
  declarations: [
    AdminComponent,
    ViewstudentComponent,
    ViewteachersComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    AboutComponent,
    Child1Component,
    FileuploadComponent,
    LoginComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    FormsModule,
    HttpClientModule
  ]
})
export class AdminModule { }
