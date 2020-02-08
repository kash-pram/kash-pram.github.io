import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '../shared/shared.module';
import { PortfolioRoutingModule } from './portfolio-routing.module';
// import { MediumWidgetModule } from 'ngx-medium-widget';

import { PortfolioComponent } from './portfolio.component';


@NgModule({
  declarations: [PortfolioComponent],
  imports: [
    CommonModule,
    SharedModule,
    // MediumWidgetModule,
    PortfolioRoutingModule
  ]
})
export class PortfolioModule { }
