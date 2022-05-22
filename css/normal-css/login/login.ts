
import { HttpClient } from '@angular/common/http';
import { Component, OnInit, TemplateRef,PLATFORM_ID, Inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
// import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { GlobalService } from 'src/app/services/global.service';
import { Router } from '@angular/router';
import * as CryptoJS from 'crypto-js';
import { isPlatformBrowser } from "@angular/common";


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  otpFormSubmit: boolean = false;
  
  otpflg:boolean=false;
  otpForm: FormGroup;
  otpPage: FormGroup;
  confirmOTP: FormGroup;
  // modalRef1?: BsModalRef;
  number: any
  OTP: Number
  otptime: any
  validateOTPFormSubmit
  // priyanka
  Searchdata: any = [];
  Selecteddata: any = [];
  otpno:any;
  newotpno:any;
  newotpno11:any;
  msg:any;
  displayno:any;
  classactive: string = '';
  cursorvalue: string = 'default';
  disableButton:boolean=true;
  newotpnotwo:any;
  
  loginuserflag:boolean=true;

  //register varibale
  registerno:any;
  regmsg:any;
  registername:any;
  registeremail:any;
  registerlocation:any;
  registerflag:boolean=false;

  userflagname:boolean=false;
  username:any;
  userdata=[];
  getuserdatadecrypt=[];
  userinfoencrypt:any;
  userinfodecrypt:any;

  

  constructor(@Inject(PLATFORM_ID) private platformId:Object,
    // private modalService: BsModalService,
    private globalservice: GlobalService, private http: HttpClient, private router: Router) { }

  ngOnInit(): void {
   console.log("in ngOnInit")
    this.otpForm = new FormGroup({
      number: new FormControl('', [Validators.required, Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")])

    })

    this.otpPage = new FormGroup({
      otpno: new FormControl('', [Validators.required])

    })

    this.confirmOTP = new FormGroup({
      otp: new FormControl('', [Validators.required, Validators.min(4)])
    })


    if (isPlatformBrowser(this.platformId)) {
      if (localStorage.getItem('userinfo') != null) {
        //login info decryption
        var encryptSecretKey = "aaaaa";
       var getlocaldata=localStorage.getItem("userinfo")
     

   this.userinfodecrypt = CryptoJS.AES.decrypt(getlocaldata, encryptSecretKey);
   this.getuserdatadecrypt = JSON.parse(this.userinfodecrypt.toString(CryptoJS.enc.Utf8));

console.log("userinfodecrypt data",this.getuserdatadecrypt);



        //this.username=this.getuserdatadecrypt;
        console.log("this.getuserdatadecrypt",this.getuserdatadecrypt)
        console.log("this.getuserdatadecrypt",this.getuserdatadecrypt["name"]);
        this.username=this.getuserdatadecrypt["name"];
        this.userflagname=true;

      }else{
        console.log("user not login ")
        this.userflagname=false;
      }
    }

  }


  otpCall(template2) {
 //console.log("otpForm",this.otpForm)
    console.log("otpCall",template2);
    console.log("old otp no------->",this.newotpno11);
    console.log("updated otp===========>",this.newotpno)
    this.otpno=""

   
    if (template2) {
  //    this.openModal(template2)
  this.displayno=template2;
      console.log("true");
      this.msg="OTP has been sent successfully";
      this.sendOTP(template2)
    } else {
      console.log("wrong number");

    }

  }


  otpCallTwo(template2) {
    //console.log("otpForm",this.otpForm)
       console.log("otpCall",template2.length);
       console.log("old otp no------->",this.newotpno11);
       console.log("updated otp===========>",this.newotpno)
       if(template2.length==10){  
       if (template2) {
        //    this.openModal(template2)
        this.displayno=template2;
            console.log("true");
            this.msg="OTP has been sent successfully";
            this.sendOTP(template2)
          } else {
            console.log("wrong number");
          }
       }
       else{
         this.msg="Please enter valid mobile number"
       }
   
   
     }


     resendotpCall() {
         if (this.displayno) {
           console.log("true");
           this.msg="OTP has been sent successfully";
           this.sendOTP(this.displayno)
       
     
     
     
         } else {
           console.log("wrong number");
     
         }
     
       }

  displaydiv(event){
    console.log("css call here");
    this.newotpno=this.displayno;
    document.getElementById("abc").style.display="initial";

    document.getElementById("resendotpid").style.display="none";
    event.preventDefault(); 

    // const el = event.target;
    // el.setAttribute('style', 'display: none');
  }

  ngOnChanges(){
  
  }

  keyPress(event: KeyboardEvent) {
    let value = (<HTMLInputElement>event.target).value ;
  console.log("value------->",value)
  console.log("value------->",value.length)
  var minNumber=value.length + 1;
  console.log("min Number",minNumber);
    let button= document.getElementById("btnsendotp")

  // if(minNumber == 10){
  //   this.classactive='';
  // console.log("in if")
  // // button.disabled="disabled"
  //   //document.getElementById("sendotpbtn").style.display="initial";
  // }else{
  //   this.classactive='disable';

  //   document.getElementById("sendotpbtn").style.display="disable";
  // }

  if (minNumber == 11) {
    document.getElementById('btnsendotp').removeAttribute("disabled");
} else{
    document.getElementById('btnsendotp').setAttribute("disabled", null);
}
}

  otpCallPage(){
    console.log("this.otpno",this.otpno);
    
    // console.log("this input value",otpno);
    console.log("this.OTP",this.OTP);
    
    if(this.otpno==this.OTP){
      console.log("ho to home page")
      this.msg="Login successfully";
//login info encryption
      var encryptSecretKey = "aaaaa";
      this.userinfoencrypt = CryptoJS.AES.encrypt(JSON.stringify(this.userdata), encryptSecretKey).toString();
      // console.log("jpencrypt====>",jpencrypt);
      localStorage.setItem("userinfo", this.userinfoencrypt);


    }else{
      console.log("invalid otp");
      this.msg="Invalid OTP .Please resent otp";
    }

  }

  openModal(template: TemplateRef<any>) {

    try {
      // this.modalRef1 = this.modalService.show(template)
    } catch (error) {
      console.log("error >>> ", error);

    }
  }



  sendOTP(template2) {
    console.log("vishal 1",template2);
    
    const body = {
      mobilenumber: template2
    };
    // let url = this.base_path_service.base_path_api() + 'user/loginViaPhone';
    // let url = 'https://fchapi.familycarehospitals.com/api/v1/user/loginViaPhone';
    let url = 'http://localhost:3000/api/v1/user/loginapi';

    this.http.post<any>(url, body).subscribe(rsp => {
      console.log("data vishal", rsp);
      console.log("----->",rsp.data.otp)

      if (rsp.success == true) {
        this.username=rsp.data.name;
        this.userdata=rsp.data;
        console.log("name of usser in login",this.username);
        this.userflagname=true;
        this.OTP = rsp.data.otp;
        this.otpflg=true;
        // this.otptime = rsp.data.otptime



        // console.log({

        //   'this.OTP': this.OTP,
        //   ' this.otptime': this.otptime
        // });

      }
      else{
        this.msg="Please register with your mobile number to get started";
        this.registerno=this.displayno;
        this.registerflag=true;
        event.preventDefault(); 

        console.log("non login else part call");
        
        setTimeout(() => {
          console.log("Delayed for 2 second.");
          this.loginuserflag=false;
        },50000)
        // this.loginuserflag=false;
      }

    })
  }

  // validateOTP(){
  //   let x = countdown(this.otptime).countdown().toString(); 
  //   console.log("test",x);
  //   moment
  // }

  Searchenterdata(e) {
    console.log("Search data", e);
    let url = this.globalservice.base_path_api() + 'cars/search-car/' + e;
    this.globalservice.PostRequest(url, {}).subscribe(res => {
      this.Searchdata = res.data
      console.log("Search data array", this.Searchdata);
    })
  }

  searchTerm(e) {
    console.log("Search data", e);
    let url = this.globalservice.base_path_api() + 'cars/search-car/' + e;
    this.globalservice.PostRequest(url, {}).subscribe(res => {
      this.Searchdata = res.data
      console.log("Search data array", this.Searchdata);
      this.router.navigate(['/searchcars'],
        { queryParams: { data: JSON.stringify(this.Searchdata) } }
      );
    })
  }

  searchclick() {
    let data = this.Searchdata;
    console.log("searchclick", data);
    this.router.navigate(['/searchcars'],
      { queryParams: { data: JSON.stringify(data) } }
    );
  }

  Searchtermdata(option) {
    console.log("selected data", option);
    this.Selecteddata.push(option);
    console.log("selected array data", this.Selecteddata);
    this.router.navigate(['/searchcars'],
      { queryParams: { data: JSON.stringify(this.Selecteddata) } }
    );
  }



  registerUser(){
    console.log("register submit btn call",this.registerno,this.registername,this.registeremail,this.registerlocation);
    let url = 'http://localhost:3000/api/v1/user/registerapi';
    this.registerflag=false;
    this.displayno=this.registerno
    const body={
      "mobilenumber":this.registerno,
      "name":this.registername,
      "email":this.registeremail,
      "location":this.registerlocation
  };

    this.http.post<any>(url, body).subscribe(rsp => {
      console.log("data vishal", rsp);
      console.log("----->",rsp.data.otp)
      
      
     if (rsp.success == true) {
        this.OTP = rsp.data.otp;
        this.otpflg=true;
        this.username=rsp.data.name;
        this.userdata=rsp.data;
        this.userflagname=true;
        console.log("name of usser in register",this.username);
      }
      else{
        this.msg="Please register with your mobile number to get started";
        this.registerno=this.displayno
        console.log("non login else part call");
        this.registerflag=true;
        event.preventDefault(); 
       }
  })

}


logoutUser(){
  this.userflagname=false;
  this.username="";
  localStorage.removeItem("userinfo");

}






}



