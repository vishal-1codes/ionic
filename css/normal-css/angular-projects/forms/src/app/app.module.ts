import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormoneComponent } from './formone/formone.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DropdwonComponent } from './dropdwon/dropdwon.component';

@NgModule({
  declarations: [
    AppComponent,
    FormoneComponent,
    DropdwonComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
