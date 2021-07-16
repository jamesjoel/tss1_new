import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VisiterRoutingModule } from './visiter-routing.module';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';
import { VisiterComponent } from './visiter.component';


@NgModule({
  declarations: [
    HomeComponent,
    AboutComponent,
    ContactComponent,
    VisiterComponent
  ],
  imports: [
    CommonModule,
    VisiterRoutingModule
  ]
})
export class VisiterModule { }
