import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { ContainerComponent } from './components/container/container.component';
import { HeaderComponent } from './components/header/header.component';
import { BannerComponent } from './components/banner/banner.component';
import { ApartmentContainerComponent } from './apartment-container/apartment-container.component';
import { ApartmentComponent } from './apartment/apartment.component';
import { SectionComponent } from './section/section.component';
import { VideosComponent } from './videos/videos.component';
import { FooterComponent } from './footer/footer.component';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';

@NgModule({
  declarations: [
    ContainerComponent,
    HeaderComponent,
    BannerComponent,
    ApartmentContainerComponent,
    ApartmentComponent,
    SectionComponent,
    VideosComponent,
    FooterComponent,
    AboutComponent,
    HomeComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [ContainerComponent]
})
export class AppModule { }
