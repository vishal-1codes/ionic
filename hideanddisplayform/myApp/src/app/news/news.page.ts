import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-news',
  templateUrl: './news.page.html',
  styleUrls: ['./news.page.scss'],
})
export class NewsPage implements OnInit {
  
  data:any;
  arrayData=[]

  constructor(
    private http:HttpClient,
    private router:Router
  ) { }

  ngOnInit() {
    this.http.get('https://newsapi.org/v2/everything?q=Apple&from=2022-03-10&sortBy=popularity&apiKey=4a76b86dbe4a4078b1262451c924a44d').subscribe(res=>{
      console.log("here we get responese",res);
      this.data=res
      this.arrayData=this.data.articles
      console.log("----------------get data",this.arrayData);
      
      
      
      
    })
    
  }

  //here we get auther name add we pass data 
  goToNew(){
    this.router.navigate(['/newpage',this.arrayData[0].author])
  }

 

}
