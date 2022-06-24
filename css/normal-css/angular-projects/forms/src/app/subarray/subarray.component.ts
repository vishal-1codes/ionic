import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-subarray',
  templateUrl: './subarray.component.html',
  styleUrls: ['./subarray.component.css']
})
export class SubarrayComponent implements OnInit {

  arrayone:any=[
    {name:'vishal',sname:'pawar',index:'0'},
    {name:'shivam',sname:'tiwari',index:'1'},
    {name:'tanvi',sname:'gosavi',index:'2'},
    {name:'shivani',sname:'chavan',index:'3'},
    {name:'kalyani',sname:'jadhav',index:'4'},
  ]

  arraytwo:any=[
    {age:'23',index:'0'},
    {age:'22',index:'1'},
    {age:'22',index:'2'},
    {age:'23',index:'3'},
    {age:'25',index:'4'},
  ]

  arraythree:any=[]
  constructor() { }

  ngOnInit(): void {
    this.addtwoArray()
  }

  //https://stackoverflow.com/questions/38092458/merge-two-object-arrays-with-angular-2-and-typescript

  addtwoArray(){
    console.log("function working");
    // const array1=this.arrayone
    // const array2=this.arraytwo

    // const newarray=array1.reduce(function(result:any,field:any,index:any){
    //   result[array2[index]]=field;
    //   return result
    // })

    // console.log("new array",newarray);


    const mergeArray=(array1:any,array2:any)=>{
      array1.map((itm:any)=>({
        ...array2.find((item:any)=>(item.index === itm.index) && itm),
        ...itm
      }))

      let result=mergeArray(this.arrayone,this.arraytwo)

      console.log("result value",result);
      
    }
    

    
    
  }


}
