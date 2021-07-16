import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path : "",
    loadChildren : ()=>import('./visiter/visiter.module').then(v=>v.VisiterModule)
  },
  {
    path : "admin",
    loadChildren : ()=>import('./admin/admin.module').then(a=>a.AdminModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
