import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VisiterRoutingModule } from './visiter-routing.module';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';
import { VisiterComponent } from './visiter.component';
import { HeaderComponent } from './shared/header/header.component';
import { MiddleHeaderComponent } from './shared/middle-header/middle-header.component';
import { OnlineCoursesComponent } from './shared/online-courses/online-courses.component';
import { EventsComponent } from './shared/events/events.component';
import { FooterComponent } from './shared/footer/footer.component';


@NgModule({
  declarations: [
    HomeComponent,
    AboutComponent,
    ContactComponent,
    VisiterComponent,
    HeaderComponent,
    MiddleHeaderComponent,
    OnlineCoursesComponent,
    EventsComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    VisiterRoutingModule
  ]
})
export class VisiterModule { }
