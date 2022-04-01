import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import * as firebase from 'firebase'
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';


const firebaseConfig = {
  apiKey: "AIzaSyDDx25oDjWn84a3_HNRne4GT644Qo8a0eY",
  authDomain: "auth-af7c9.firebaseapp.com",
  projectId: "auth-af7c9",
  storageBucket: "auth-af7c9.appspot.com",
  messagingSenderId: "586866980229",
  appId: "1:586866980229:web:b0b513994a7676cd8a80ec",
  measurementId: "G-KRG0ZKZX3D"
};

firebase.initializeApp(firebaseConfig);

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
