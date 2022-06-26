import { Component, OnInit } from '@angular/core';
// import Swiper from 'swiper';
// import SwiperCore from 'swiper';

import SwiperCore, { SwiperOptions,Navigation, Pagination, Scrollbar, A11y } from 'swiper';
SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);

import 'swiper/less';
import 'swiper/less/navigation';
import 'swiper/less/pagination';


@Component({
  selector: 'app-swiper',
  templateUrl: './swiper.component.html',
  styleUrls: ['./swiper.component.css']
})
export class SwiperComponent implements OnInit {

   

  config: SwiperOptions = {
    slidesPerView: 1,
    spaceBetween: 50,
    navigation: true,
    pagination: { clickable: true },
    scrollbar: { draggable: true },
  };

  vishalSlides:SwiperOptions={
    slidesPerView:1,
    spaceBetween:30,
    navigation:true,
    pagination:{clickable:true},
    scrollbar:{draggable:true}
  }

  constructor() { }

  ngOnInit(): void {
    // const swiper = new Swiper('.swiper', {
    //   // Optional parameters
    //   //below two line coments because this give vertical line
    //   // direction: 'vertical',
    //   // loop: true,
    
    //   // If we need pagination
    //   pagination: {
    //     el: '.swiper-pagination',
    //   },
    
    //   // Navigation arrows
    //   navigation: {
    //     nextEl: '.swiper-button-next',
    //     prevEl: '.swiper-button-prev',
    //   },
    
    //   // And if we need scrollbar
    //   scrollbar: {
    //     el: '.swiper-scrollbar',
    //   },
    // });

   
  }

  // onSwiper(swiper:any) {
  //   console.log(swiper);
  // }
  // onSlideChange() {
  //   console.log('slide change');
  // }

  onSwiper(swiper:any) {
    console.log(swiper);
  }
  onSlideChange() {
    console.log('slide change');
  }

  

}
