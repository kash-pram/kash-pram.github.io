import { Component, OnInit } from '@angular/core';
// import {BrowserModule, DomSanitizer} from '@angular/platform-browser'
import { PROJECT_CARDS, TIMELINE_CARDS } from 'src/app/_constants/past-constants';

@Component({
  selector: 'app-past',
  templateUrl: './past.component.html',
  styleUrls: ['./past.component.scss']
})
export class PastComponent implements OnInit {
  // scriptHTML;
  cardsData = PROJECT_CARDS;
  timelineData = TIMELINE_CARDS;
  
  constructor () {
  // constructor ( private sanitizer: DomSanitizer) {
    // this.scriptHTML = sanitizer.bypassSecurityTrustHtml('<div id="medium-widget"></div><script src="https://medium-widget.pixelpoint.io/widget.js"></script>\
    // <script>MediumWidget.Init({renderTo: "#medium-widget", params: {"resource":"https://medium.com/@ppm1988/loading-webpages-faster-6950a65c6d90","postsPerLine":2,"limit":4,"picture":"big","fields":["description","author","claps","publishAt"],"ratio":"landscape"}})</script>') ;
  }

  ngOnInit() {
  }

}