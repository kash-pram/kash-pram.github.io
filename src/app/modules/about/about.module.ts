import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarouselModule } from 'ngx-owl-carousel-o';

// import { SharedModule } from '../shared/shared.module';
import { AboutRoutingModule } from './about-routing.module';

import { AboutComponent } from './about.component';

@NgModule({
  declarations: [AboutComponent],
  imports: [
    CarouselModule,
    CommonModule,
    // SharedModule,
    AboutRoutingModule
  ]
})
export class AboutModule { }
