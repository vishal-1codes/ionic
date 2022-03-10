import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-newpage',
  templateUrl: './newpage.page.html',
  styleUrls: ['./newpage.page.scss'],
})
export class NewpagePage implements OnInit {

  oldId:any

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(event => {
      // this.token = event.token;
      // this.user_id = event.user_id;
      console.log("here we get id",event.id);
      this.oldId=event.id
      console.log("here we store old ID",this.oldId);
      
      
     });

     this.abc()

  }

  abc(){
    console.log("pass data as global",this.oldId);
    
  }

}
