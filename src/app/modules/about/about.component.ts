import { Component } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

import { PROFILES_CARDS, INTERESTS_CARDS } from 'src/app/_constants/about-constants';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  // styleUrls: ['./about.component.scss']
})
export class AboutComponent {
  profilesData = PROFILES_CARDS;
  interestsData = INTERESTS_CARDS;

  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: false,
    touchDrag: false,
    pullDrag: false,
    dots: false,
    autoplay: true,
    autoplaySpeed: 1000,
    navSpeed: 100,
    // navText: [],
    // navText: ['', ''],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      }
      // ,
      // 740: {
      //   items: 3
      // }
      // ,
      // 940: {
      //   items: 4
      // }
    },
    nav: true
  };

  constructor () {  }

}
