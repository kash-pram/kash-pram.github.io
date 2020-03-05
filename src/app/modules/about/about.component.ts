import { Component } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

import { PROFILES_CARDS, INTERESTS_CARDS } from 'src/app/_constants/about-constants';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  // styleUrls: ['./about.component.scss']
})
export class AboutComponent {
  interestsData = INTERESTS_CARDS;
  profilesData = PROFILES_CARDS;

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

  constructor () {
    this.assignColor();
  }

  assignColor () {
    this.interestsData.forEach(elem => {
      elem['bgcolor'] = this.getRandomColor();
    });
  } // FN

  getRandomColor() {
    return 'rgb(' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ')';
  }

}
