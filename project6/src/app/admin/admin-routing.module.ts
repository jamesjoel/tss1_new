import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin.component';
import { ViewstudentComponent } from './pages/viewstudent/viewstudent.component';
import { ViewteachersComponent } from './pages/viewteachers/viewteachers.component';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { FileuploadComponent } from './pages/fileupload/fileupload.component';
import { LoginComponent } from './pages/login/login.component';

const routes: Routes = [
  {
    path : "", // :4200/admin
    component : AdminComponent,
    children : [
      {
        path : "", // :4200/admin
        component : HomeComponent

      },
      {
        path : "login",
        component : LoginComponent
      },
      {
        path : "student",// :4200/admin/student
        component : ViewstudentComponent
      },
      {
        path : "teacher",// :4200/admin/teacher
        component : ViewteachersComponent
      },
      {
        path : "about",
        component : AboutComponent
      },
      {
        path : "upload",
        component : FileuploadComponent
      }
    ]

  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
