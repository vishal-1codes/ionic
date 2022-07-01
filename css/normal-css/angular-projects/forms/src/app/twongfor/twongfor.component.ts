import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-twongfor',
  templateUrl: './twongfor.component.html',
  styleUrls: ['./twongfor.component.css']
})
export class TwongforComponent implements OnInit {

  array1:any=["one","two","three","four"]
  array2:any=["vishal","vighnesh","vijeta","vinayak"]

  constructor() { }

  ngOnInit(): void {
  }

}
