import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VisiterRoutingModule } from './visiter-routing.module';
import { VisiterComponent } from './visiter.component';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { HeaderComponent } from './shared/header/header.component';
import { MiddleHeaderComponent } from './shared/middle-header/middle-header.component';
import { VideoPlayerComponent } from './shared/video-player/video-player.component';
import { SubscriptionComponent } from './shared/subscription/subscription.component';
import { FreeDownloadComponent } from './shared/free-download/free-download.component';
import { CounterBoxesComponent } from './shared/counter-boxes/counter-boxes.component';
import { TeamsComponent } from './shared/teams/teams.component';
import { CustomerSliderComponent } from './shared/customer-slider/customer-slider.component';
import { NewsletterComponent } from './shared/newsletter/newsletter.component';
import { FooterComponent } from './shared/footer/footer.component';


@NgModule({
  declarations: [
    VisiterComponent,
    HomeComponent,
    AboutComponent,
    NavbarComponent,
    HeaderComponent,
    MiddleHeaderComponent,
    VideoPlayerComponent,
    SubscriptionComponent,
    FreeDownloadComponent,
    CounterBoxesComponent,
    TeamsComponent,
    CustomerSliderComponent,
    NewsletterComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    VisiterRoutingModule
  ]
})
export class VisiterModule { }
