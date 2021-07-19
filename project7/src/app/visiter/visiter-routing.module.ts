import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VisiterComponent } from './visiter.component';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';

const routes: Routes = [
  {
    path : "",
    component : VisiterComponent,
    children : [
      {
        path : "",
        component : HomeComponent
      },
      {
        path : "about",
        component : AboutComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VisiterRoutingModule { }
