import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit{

  rNo:any;

  constructor( private router:Router) {}

  ngOnInit(): void {
    
    this.gNo(),
    this.refreshPage();
  }

  goRandom(){
    this.router.navigate(['/random'])
  }

  gNo(){
    // this.rNo=Math.floor((Math.random()*100)+1)
    console.log("gNo() called()");
    
  }

  ionViewWillEnter(){
    this.myDefaultMethodToFetchData();
  }

  refreshPage() {
    this.ionViewWillEnter();
  }

  myDefaultMethodToFetchData(){
    this.rNo=Math.floor((Math.random()*100)+1)
}



}
