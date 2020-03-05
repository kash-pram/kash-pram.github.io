import { Component, OnInit } from '@angular/core';
// import {BrowserModule, DomSanitizer} from '@angular/platform-browser'
import { OwlOptions } from 'ngx-owl-carousel-o';

import { PROJECT_CARDS, TIMELINE_CARDS } from 'src/app/_constants/past-constants';

@Component({
  selector: 'app-past',
  templateUrl: './past.component.html',
  styleUrls: ['./past.component.scss']
})
export class PastComponent implements OnInit {
  // scriptHTML;
  projectsData = PROJECT_CARDS;
  timelineData = TIMELINE_CARDS;

  isMobile = ( window.innerWidth >= 768 ) ? false : true;

  customOptions: OwlOptions = {
    loop: true,
    items: this.isMobile ? 1 : 3,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: true,
    autoplay: true,
    // dotsEach: true,
    autoplaySpeed: 500,
    navSpeed: 700,
    // navText: [],
    navText: ['<', '>'],
    // responsive: {
    //   0: {
    //     items: 1
    //   },
    //   400: {
    //     items: 2
    //   }
    //   // ,
    //   // 740: {
    //   //   items: 3
    //   // }
    //   // ,
    //   // 940: {
    //   //   items: 4
    //   // }
    // },
    nav: true
  };

  constructor () {
  // constructor ( private sanitizer: DomSanitizer) {
    // this.scriptHTML = sanitizer.bypassSecurityTrustHtml('<div id="medium-widget"></div><script src="https://medium-widget.pixelpoint.io/widget.js"></script>\
    // <script>MediumWidget.Init({renderTo: "#medium-widget", params: {"resource":"https://medium.com/@ppm1988/loading-webpages-faster-6950a65c6d90","postsPerLine":2,"limit":4,"picture":"big","fields":["description","author","claps","publishAt"],"ratio":"landscape"}})</script>') ;
  }

  ngOnInit() {
  }

}
