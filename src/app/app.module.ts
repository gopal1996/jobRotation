import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CarouselComponent } from './components/carousel/carousel.component';
import { VideoPromoComponent } from './components/video-promo/video-promo.component';
import { CardsComponent } from './components/cards/cards.component';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { JobCardsComponent } from './components/job-cards/job-cards.component';
import { ApplicantListComponent } from './components/applicant-list/applicant-list.component';
import { SearchbarComponent } from './components/searchbar/searchbar.component';
import { ProfileComponent } from './components/profile/profile.component';
import { AspirationsComponent } from './components/aspirations/aspirations.component';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { AboutComponent } from './components/about/about.component';
import { AccordionModule } from 'ngx-bootstrap/accordion';
import { ReportsComponent } from './components/reports/reports.component';
import { JobComponent } from './components/job/job.component';
import { JobCardComponent } from './components/job-card/job-card.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    CarouselComponent,
    VideoPromoComponent,
    CardsComponent,
    JobCardsComponent,
    ApplicantListComponent,
    SearchbarComponent,
    ProfileComponent,
    AspirationsComponent,
    AboutComponent,
    ReportsComponent,
    JobComponent,
    JobCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    CarouselModule.forRoot(),
    AccordionModule.forRoot(),
    TabsModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
