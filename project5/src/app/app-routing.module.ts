import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditStudentComponent } from './pages/edit-student/edit-student.component';
import { HomeComponent } from './pages/home/home.component';
import { StudentComponent } from './pages/student/student.component';
import { EmployeeComponent } from './pages/employee/employee.component';

const routes: Routes = [
  {
    path : "",
    component : HomeComponent
  },
  {
    path : "student",
    component : StudentComponent
  },
  {
    path : "editstudent/:id",
    component : EditStudentComponent
  },
  {
    path : "employee",
    component : EmployeeComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
