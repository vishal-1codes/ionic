import { Component } from '@angular/core';
import { GetStudentService } from './get-student.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent {
  studentsData :any=[];

  stundetAge:any=[];

  title = 'onefile';

  constructor(private api:GetStudentService) {
    //1st call in constructor

    // api.getStudents().subscribe(value=>{
    //   this.studentsData=value
    //   console.log("hiiiiii",value);
      
    // })
  }

  

  ngOnInit() {
    //2nd call in ngOnInit()
    this.api.getStudents().subscribe((data)=>{
    this.studentsData = data;
    console.log("get data in console",data);
    this.doSomething()

    this.api.getUserByAge().subscribe((dataE)=>{
      this.stundetAge=dataE;
      console.log("get data by age",dataE);
      
    })


});
}

  doSomething(){
    //3rd call in new created function
    console.debug(this.studentsData);
    console.log("hi vishal",this.studentsData);
    
  }

  doNathing(){

  }

}
