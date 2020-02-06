import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { APP_CONSTANTS } from 'src/app/_constants/app-constants';

@Component({
  selector: 'app-top-nav',
  templateUrl: './top-nav.component.html',
  styleUrls: ['./top-nav.component.scss']
})
export class TopNavComponent {
  NAV_ITEMS = APP_CONSTANTS.NAV_ITEMS;
  selectedNavIndex: number = 0;

  constructor ( public router: Router ) { }

  checkNavActive () {
    for ( let i = 0; i < this.NAV_ITEMS.length; i++ ) {
      if ( this.router.url ===  this.NAV_ITEMS[i]['link'] ) {
        this.selectNavItem(i);
        break;
      }
    } // FOR
  } // FN

  selectNavItem ( newIndex ) {
    this.selectedNavIndex = newIndex;
  } // FN
}
