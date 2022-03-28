import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  uri="http://localhost:3000"

  constructor(private http: HttpClient){

  }
  
  ngOnInit():void{
    console.log("ngOnit Called");
    
    this.getIssues()
  }

  getIssues() {
    return this.http.get(`${this.uri}/api/student`);
  }

  title = 'connectbackend';
}
