import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  otpSent: boolean = false
phoneNumber = null
otp = null

  constructor() { }

  ngOnInit(): void {
  }

  sendOtp(){}
signIn(){}

}
