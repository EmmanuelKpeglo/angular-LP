import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

import { AppRoutingModule } from './app-routing.module';
import { ContainerComponent } from './components/container/container.component';
import { HeaderComponent } from './components/header/header.component';
import { BannerComponent } from './components/banner/banner.component';
import { ApartmentComponent } from './components/apartment/apartment.component';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';
import { HomeComponent } from './components/home/home.component';
import { FooterComponent } from './components/footer/footer.component';
import { QuoteFormComponent } from './components/quote-form/quote-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { EmailService } from './services/email.service';
import { HttpClientModule } from '@angular/common/http';
import { GalleryComponent } from './components/gallery/gallery.component';
import { GalleryImageComponent } from './components/gallery-image/gallery-image.component';
import { PageTitleComponent } from './components/page-title/page-title.component';

@NgModule({
  declarations: [
    ContainerComponent,
    HeaderComponent,
    BannerComponent,
    ApartmentComponent,
    FooterComponent,
    AboutComponent,
    HomeComponent,
    ContactComponent,
    QuoteFormComponent,
    GalleryComponent,
    GalleryImageComponent,
    PageTitleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [ EmailService ],
  bootstrap: [ContainerComponent]
})
export class AppModule { }
