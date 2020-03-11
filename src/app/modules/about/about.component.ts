import { Component } from '@angular/core';

import { PROFILES_CARDS, INTERESTS_CARDS } from 'src/app/_constants/about-constants';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  // styleUrls: ['./about.component.scss']
})
export class AboutComponent {
  interestsData = INTERESTS_CARDS;
  profilesData = PROFILES_CARDS;

  constructor () {
    this.assignColor();
  }

  assignColor () {
    this.interestsData.forEach(elem => {
      elem['bgcolor'] = this.getRandomColor();
    });

    // this.profilesData.forEach(elem => {
    //   elem['color'] = this.getRandomColor();
    // });
  } // FN

  getRandomColor() {
    return 'rgb(' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ')';
  }

}
