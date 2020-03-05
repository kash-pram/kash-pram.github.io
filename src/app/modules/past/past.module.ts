import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarouselModule } from 'ngx-owl-carousel-o';

// import { SharedModule } from '../shared/shared.module';
import { PastRoutingModule } from './past-routing.module';
// import { MediumWidgetModule } from 'ngx-medium-widget';

import { PastComponent } from './past.component';


@NgModule({
  declarations: [ PastComponent ],
  imports: [
    CommonModule,
    CarouselModule,
    PastRoutingModule,
    // SharedModule,
    // MediumWidgetModule,
  ]
})
export class PastModule { }
