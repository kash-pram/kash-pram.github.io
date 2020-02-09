import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { CARDS_CONSTANTS } from 'src/app/_constants/cards-constants';

@Component({
  selector: 'app-cards-list',
  templateUrl: './cards-list.component.html',
  // styleUrls: ['./cards-list.component.scss']
})
export class CardsListComponent {
  cardsData = [];

  constructor ( public router: Router ) {
    this.cardsData = CARDS_CONSTANTS[this.router.url];
  } // CONSTR

} // EXPORT
