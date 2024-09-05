import {CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { ServicesComponent } from './components/services/services.component';
import { CtaComponent } from './components/cta/cta.component';
import { ClientsComponent } from './components/clients/clients.component';
import { TeamComponent } from './components/team/team.component';
import { ReviewsComponent } from './components/reviews/reviews.component';
import { ContactComponent } from './components/contact/contact.component';
import { FooterComponent } from './components/footer/footer.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FaqComponent } from './components/faq/faq.component';
import { register } from 'swiper/element/bundle';
import { PartenersComponent } from './components/parteners/parteners.component';
import { MatProgressBarModule } from '@angular/material/progress-bar';
// register Swiper custom elements
register();

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    ServicesComponent,
    CtaComponent,
    ClientsComponent,
    TeamComponent,
    ReviewsComponent,
    ContactComponent,
    FooterComponent,
    NavbarComponent,
    FaqComponent,
    PartenersComponent,
    

  ],
  imports: [
    BrowserModule, 
    BrowserAnimationsModule,
    AppRoutingModule,
    MatProgressBarModule,

  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule { }
