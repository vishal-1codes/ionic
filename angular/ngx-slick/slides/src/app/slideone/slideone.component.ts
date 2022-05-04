import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-slideone',
  templateUrl: './slideone.component.html',
  styleUrls: ['./slideone.component.css']
})
export class SlideoneComponent implements OnInit {
  slides = [
    {img: "\https://images.unsplash.com/photo-1556189250-72ba954cfc2b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Ym13fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"},
    {img: "https://images.unsplash.com/flagged/photo-1553505192-acca7d4509be?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8Ym13fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"},
    {img: "https://images.unsplash.com/photo-1555215695-3004980ad54e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8Ym13fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"},
    {img: "https://images.unsplash.com/photo-1617531653332-bd46c24f2068?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fGJtd3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"}
  ];
  slideConfig = {"slidesToShow": 4, "slidesToScroll": 4};

  addSlide() {
    this.slides.push({img: "https://images.unsplash.com/photo-1556800572-1b8aeef2c54f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fGJtd3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"})
  }

  removeSlide() {
    this.slides.length = this.slides.length - 1;
  }
  
  slickInit(e:any) {
    console.log('slick initialized');
  }
  
  breakpoint(e:any) {
    console.log('breakpoint');
  }
  
  afterChange(e:any) {
    console.log('afterChange');
  }
  
  beforeChange(e:any) {
    console.log('beforeChange');
  }

  constructor() { }

  ngOnInit(): void {
  }

}
