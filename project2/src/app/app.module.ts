import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';
import { HelpComponent } from './pages/help/help.component';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { Box1Component } from './shared/box1/box1.component';
import { Box2Component } from './shared/box2/box2.component';
import { EmployeeComponent } from './pages/employee/employee.component';
import { ProductsComponent } from './pages/products/products.component';
import { StudentComponent } from './pages/student/student.component';
import { Event1Component } from './pages/event1/event1.component';
import { Event2Component } from './pages/event2/event2.component';
import { Event3Component } from './pages/event3/event3.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    HelpComponent,
    HeaderComponent,
    FooterComponent,
    Box1Component,
    Box2Component,
    EmployeeComponent,
    ProductsComponent,
    StudentComponent,
    Event1Component,
    Event2Component,
    Event3Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
