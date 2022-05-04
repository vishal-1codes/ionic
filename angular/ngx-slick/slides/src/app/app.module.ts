import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SlideoneComponent } from './slideone/slideone.component';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { NgxslickComponent } from './ngxslick/ngxslick.component';
import { NormalComponent } from './normal/normal.component';

@NgModule({
  declarations: [
    AppComponent,
    SlideoneComponent,
    NgxslickComponent,
    NormalComponent
  ],
  imports: [
    BrowserModule,
    SlickCarouselModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
