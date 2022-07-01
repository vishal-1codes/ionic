import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-filter-array',
  templateUrl: './filter-array.component.html',
  styleUrls: ['./filter-array.component.css']
})
export class FilterArrayComponent implements OnInit {

  arr1=[
    {namea:'vishal',surname:'pawar'},
    {namea:'vinayak',surname:'pawar'},
    {namea:'shivam'},
    {namea:'vighensh',surname:'pawar'},
    {surname:'tiwari'},
    {namea:'pawar1'},
    {namea:'pawar1',surname:'pawar1'},
  ]

  arr2:any=[]

  constructor() { }

  ngOnInit(): void {
    var newArr=this.arr1.filter(function(el){
      return el.surname!==undefined
    })
    this.arr2=newArr
    console.log("get file data",newArr);
  }

}
