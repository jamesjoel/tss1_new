import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FormsModule } from '@angular/forms';
// we import FormModule for Data Binding

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { StudentComponent } from './pages/student/student.component';
import { HeaderComponent } from './shared/header/header.component';
import { EmployeeComponent } from './pages/employee/employee.component';
import { AboutComponent } from './pages/about/about.component';
import { BoxComponent } from './shared/box/box.component';
import { Box2Component } from './shared/box2/box2.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    StudentComponent,
    HeaderComponent,
    EmployeeComponent,
    AboutComponent,
    BoxComponent,
    Box2Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
