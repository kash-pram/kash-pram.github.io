import { Component, OnInit } from '@angular/core';
// import { CloudData, CloudOptions } from 'angular-tag-cloud-module';
import { SKILLSET_CARDS } from 'src/app/_constants/skillset-constants';

@Component({
  selector: 'app-skillset',
  templateUrl: './skillset.component.html',
  // styleUrls: ['./skillset.component.scss']
})
export class SkillsetComponent implements OnInit {
  cardsData = SKILLSET_CARDS;
  // options: CloudOptions = {
  //   // if width is between 0 and 1 it will be set to the size of the upper element multiplied by the value 
  //   width: 1000,
  //   height: 400,
  //   overflow: false,
  // };
 
  // data: CloudData[] = [
  //   { text: 'weight-5-rotate(+10)', weight: 5, rotate: 10 },
  //   { text: 'weight-7-rotate(-20)', weight: 7, rotate: -20 },
  //   { text: 'weight-9-rotate(+35)', weight: 9, rotate: 35 }
  //   // ...
  // ];
  
  constructor() { }

  ngOnInit() {
  }

}
