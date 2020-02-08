import { Component, OnInit } from '@angular/core';
// import {BrowserModule, DomSanitizer} from '@angular/platform-browser'

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  // styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent implements OnInit {
  // scriptHTML;

  constructor () {
  // constructor ( private sanitizer: DomSanitizer) {
    // this.scriptHTML = sanitizer.bypassSecurityTrustHtml('<div id="medium-widget"></div><script src="https://medium-widget.pixelpoint.io/widget.js"></script>\
    // <script>MediumWidget.Init({renderTo: "#medium-widget", params: {"resource":"https://medium.com/@ppm1988/loading-webpages-faster-6950a65c6d90","postsPerLine":2,"limit":4,"picture":"big","fields":["description","author","claps","publishAt"],"ratio":"landscape"}})</script>') ;
  }

  ngOnInit() {
  }

}
