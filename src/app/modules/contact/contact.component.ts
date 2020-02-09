import { Component } from '@angular/core';

import { CONTACT_CARDS } from 'src/app/_constants/contact-constants';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  // styleUrls: ['./contact.component.scss']
})
export class ContactComponent {
  cardsData = CONTACT_CARDS;

  constructor () {  }

}
