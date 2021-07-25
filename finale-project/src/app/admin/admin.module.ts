import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './shared/header/header.component';
import { SideBarComponent } from './shared/side-bar/side-bar.component';
import { HomeComponent } from './pages/home/home.component';
import { AdminComponent } from './admin.component';
import { AdminRoutingModule } from './admin-routing.module';


@NgModule({
  declarations: [
    HeaderComponent,
    SideBarComponent,
    HomeComponent,
    AdminComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }
