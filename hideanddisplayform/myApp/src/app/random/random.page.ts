import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-random',
  templateUrl: './random.page.html',
  styleUrls: ['./random.page.scss'],
})
export class RandomPage implements OnInit {

  random:any;

  constructor() { }

  ngOnInit() {
    this.genrateRandomNumber();
  }

  genrateRandomNumber(){
    this.random=Math.floor((Math.random() * 100) + 1);
    console.log("-----number created",this.random);
    
  }

}
