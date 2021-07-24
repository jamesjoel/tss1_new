import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin.component';
import { ViewstudentComponent } from './pages/viewstudent/viewstudent.component';
import { ViewteachersComponent } from './pages/viewteachers/viewteachers.component';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { FileuploadComponent } from './pages/fileupload/fileupload.component';
import { LoginComponent } from './pages/login/login.component';
import { AuthGuard } from './guard/auth.guard';
import { BeforeLoginGuard } from './guard/before-login.guard';

const routes: Routes = [
  {
    path : "", // :4200/admin
    component : AdminComponent,
    children : [
      {
        path : "", // :4200/admin
        component : HomeComponent,
        canActivate : [AuthGuard]

      },
      {
        path : "login",
        component : LoginComponent,
        canActivate : [BeforeLoginGuard]
      },
      {
        path : "student",// :4200/admin/student
        component : ViewstudentComponent,
        canActivate : [AuthGuard]
      },
      {
        path : "teacher",// :4200/admin/teacher
        component : ViewteachersComponent,
        canActivate : [AuthGuard]
      },
      {
        path : "about",
        component : AboutComponent,
        canActivate : [AuthGuard]
      },
      {
        path : "upload",
        component : FileuploadComponent,
        canActivate : [AuthGuard]
      }
    ]

  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
