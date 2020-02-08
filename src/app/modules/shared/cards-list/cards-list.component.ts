import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-cards-list',
  templateUrl: './cards-list.component.html',
  styleUrls: ['./cards-list.component.scss']
})
export class CardsListComponent implements OnInit {
  @Input()
  cardTitle: string;
  
  @Input()
  cardSubTitle: string;

  @Input()
  cardMessage;

  constructor() { }

  ngOnInit() {
    console.log('card ', this.cardTitle, this.cardMessage, this.cardSubTitle);
    
  }

}
