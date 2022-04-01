import { Component, OnInit } from '@angular/core';

import * as firebase from 'firebase';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  [x: string]: any;

  otpSent: boolean = false
phoneNumber = null
otp = null

  constructor() { }

  ngOnInit(): void {
    this['recaptchaVerifier'] = new firebase.auth.RecaptchaVerifier('sign-in-button', {
      'size': 'invisible'
      });
  }

  sendOtp(){
    firebase.auth().signInWithPhoneNumber('+91' + this.phoneNumber, this['recaptchaVerifier'])

    .then((confirmationResult) => {
      // SMS sent. Prompt user to type the code from the message, then sign the
      // user in with confirmationResult.confirm(code).
      // SMS sent. Prompt user to type the code from the message, then sign the
      // user in with confirmationResult.confirm(code).
      this['confirmationResult'] = confirmationResult;
      this.otpSent = true;
      }).catch(err => {
      console.log(err)
      })

  }


signIn(){

  this['confirmationResult'].confirm(this.otp).then((user: any)=>{
    console.log(user)
    })
}

}
