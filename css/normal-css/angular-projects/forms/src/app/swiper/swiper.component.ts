import { Component, OnInit } from '@angular/core';
import Swiper from 'swiper';


@Component({
  selector: 'app-swiper',
  templateUrl: './swiper.component.html',
  styleUrls: ['./swiper.component.css']
})
export class SwiperComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    const swiper = new Swiper('.swiper', {
      // Optional parameters
      //below two line coments because this give vertical line
      // direction: 'vertical',
      // loop: true,
    
      // If we need pagination
      pagination: {
        el: '.swiper-pagination',
      },
    
      // Navigation arrows
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    
      // And if we need scrollbar
      scrollbar: {
        el: '.swiper-scrollbar',
      },
    });
  }

  

}
