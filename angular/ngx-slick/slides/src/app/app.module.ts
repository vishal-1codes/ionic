import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SlideoneComponent } from './slideone/slideone.component';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { NgxslickComponent } from './ngxslick/ngxslick.component';
import { NormalComponent } from './normal/normal.component';
import { NgxSlickJsModule } from 'ngx-slickjs'

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
    AppRoutingModule,
    NgxSlickJsModule.forRoot({
      links: {
        jquery: "https://code.jquery.com/jquery-3.4.0.min.js",
        slickJs: "https://cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick.min.js",
        slickCss: "https://cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick.css",
        slickThemeCss: "https://cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick-theme.css"
      }
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
