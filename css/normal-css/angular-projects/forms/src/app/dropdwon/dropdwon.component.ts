  import { Component, OnInit } from '@angular/core';

  @Component({
    selector: 'app-dropdwon',
    templateUrl: './dropdwon.component.html',
    styleUrls: ['./dropdwon.component.css']
  })
  export class DropdwonComponent implements OnInit {

    //variable section
    newArray:any=[
      {carname:'BMW',carModel:'BMW 1'},
      {carname:'Audi',carModel:'Audi 1'},
      {carname:'BBT',carModel:'BBT 1'},
      {carname:'Mahindra',carModel:'Mahindra 1'},
      {carname:'Tata',carModel:'Tata 1'},
    ]

    newBrands:any=[
      {bName:'Aone'},
      {bName:'Bone'},
      {bName:'Cone'},
      {bName:'Done'},
      {bName:'Eone'},
    ]

    constructor() { }

    ngOnInit(): void {
    }

    doSomething(value:any){
      console.log("select call here",value);
      
      
    }

  }
