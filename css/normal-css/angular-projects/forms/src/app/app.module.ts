import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormoneComponent } from './formone/formone.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DropdwonComponent } from './dropdwon/dropdwon.component';
import { SubarrayComponent } from './subarray/subarray.component';
import { SwiperComponent } from './swiper/swiper.component';
import { SwiperModule } from 'swiper/angular';
import { TwongforComponent } from './twongfor/twongfor.component';
import { FilterArrayComponent } from './filter-array/filter-array.component';

@NgModule({
  declarations: [
    AppComponent,
    FormoneComponent,
    DropdwonComponent,
    SubarrayComponent,
    SwiperComponent,
    TwongforComponent,
    FilterArrayComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    SwiperModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
