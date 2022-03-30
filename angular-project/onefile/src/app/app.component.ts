import { Component } from '@angular/core';
import { GetStudentService } from './get-student.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent {
  studentsData :any=[];

  title = 'onefile';

  constructor(private api:GetStudentService) {
    api.getStudents().subscribe(value=>{
      this.studentsData=value
      console.log("hiiiiii",value);
      
    })
  }

  

  ngOnInit() {

    this.api.getStudents().subscribe((data)=>{
    this.studentsData = data;
    console.log("get data in console",data);
    this.doSomething()
});
}

  doSomething(){
    console.debug(this.studentsData);
    console.log("hi vishal");
    
  }

}
