import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin.component';
import { ViewstudentComponent } from './pages/viewstudent/viewstudent.component';
import { ViewteachersComponent } from './pages/viewteachers/viewteachers.component';

const routes: Routes = [
  {
    path : "",
    component : AdminComponent,
    children : [
      {
        path : "student",
        component : ViewstudentComponent
      },
      {
        path : "teacher",
        component : ViewteachersComponent
      }
    ]

  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
