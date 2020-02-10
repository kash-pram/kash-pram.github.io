import { Component } from '@angular/core';

import { PROFILES_CARDS } from 'src/app/_constants/profiles-constants';

@Component({
  selector: 'app-profiles',
  templateUrl: './profiles.component.html',
  // styleUrls: ['./profiles.component.scss']
})
export class ProfilesComponent {
  cardsData = PROFILES_CARDS;

  constructor () {  }

}
