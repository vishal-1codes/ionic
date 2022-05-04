import { Component, OnInit } from '@angular/core';
import { Slick } from 'ngx-slickjs';

@Component({
  selector: 'app-ngxslick',
  templateUrl: './ngxslick.component.html',
  styleUrls: ['./ngxslick.component.css']
})
export class NgxslickComponent implements OnInit {
  arrayLength = 10;

  config: Slick.Config = {
      infinite: true,
      slidesToShow: 4,
      slidesToScroll: 2,
      dots: true,
      autoplay: true,
      autoplaySpeed: 2000 
    }



  constructor() { }

  ngOnInit(): void {
  }

  getArray(count: number) {
    return new Array(count)
  }

}
