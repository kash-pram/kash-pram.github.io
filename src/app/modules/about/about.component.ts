import { Component } from '@angular/core';

import { ABOUT_CARDS } from 'src/app/_constants/about-constants';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  // styleUrls: ['./about.component.scss']
})
export class AboutComponent {
  cardsData = ABOUT_CARDS;

  constructor () {  }

}
