import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { StudentComponent } from './pages/student/student.component';
import { HeaderComponent } from './shared/header/header.component';
import { EditStudentComponent } from './pages/edit-student/edit-student.component';
import { EmployeeComponent } from './pages/employee/employee.component';
import { Demo1Pipe } from './pipes/demo1.pipe';
import { BonusPipe } from './pipes/bonus.pipe';
import { HelloDirective } from './directives/hello.directive';
import { HideDirective } from './directives/hide.directive';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    StudentComponent,
    HeaderComponent,
    EditStudentComponent,
    EmployeeComponent,
    Demo1Pipe,
    BonusPipe,
    HelloDirective,
    HideDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
