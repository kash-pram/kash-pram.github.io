import { Component, HostListener } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

import { APP_CONSTANTS } from 'src/app/_constants/app-constants';

@Component({
  selector: 'app-top-nav',
  templateUrl: './top-nav.component.html',
  styleUrls: ['./top-nav.component.scss']
})
export class TopNavComponent {
  NAV_ITEMS = APP_CONSTANTS.NAV_ITEMS;
  selectedNavIndex: number = 0;

  isMobile = ( window.innerWidth >= 768 ) ? false : true;
  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.isMobile = ( window.innerWidth >= 768 ) ? false : true;
  }

  constructor ( public router: Router ) {
    router.events.subscribe(event => {
      if(event instanceof NavigationEnd){
        this.checkNavActive();
      }
    });
  } // CONSTRUCTOR

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

  navigateByUrl ( navLink ) {
    this.router.navigateByUrl(navLink);
  } // FN

} // EXPORTS