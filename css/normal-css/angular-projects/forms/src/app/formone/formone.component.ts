import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms'

@Component({
  selector: 'app-formone',
  templateUrl: './formone.component.html',
  styleUrls: ['./formone.component.css']
})
export class FormoneComponent implements OnInit {

  contactSection = new FormGroup({
    name: new FormControl('',Validators.required),
    email: new FormControl('',Validators.required),
    phonenumber: new FormControl('',Validators.required),
    location: new FormControl('',Validators.required)
  });
  constructor() { }

  ngOnInit(): void {
  }

  callingFunction(){
    console.log("form data",this.contactSection);
    
  }

}
