import { Component, OnInit } from '@angular/core';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css'],
  providers: [NgbCarouselConfig]
})
export class CarouselComponent implements OnInit {
  images = [700, 533, 807, 124].map((n) => `https://picsum.photos/id/${n}/900/500`);

  constructor(config: NgbCarouselConfig) {
      // customize default values of carousels used by this component tree
      config.interval = 5000;
      config.wrap = false;
      config.keyboard = false;
      config.pauseOnHover = false;
  }

  ngOnInit(): void {
  }

}
