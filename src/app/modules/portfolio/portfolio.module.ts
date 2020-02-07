import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PortfolioComponent } from './portfolio.component';
import { PortfolioRoutingModule } from './portfolio-routing.module';
// import { MediumWidgetModule } from 'ngx-medium-widget';

@NgModule({
  declarations: [PortfolioComponent],
  imports: [
    CommonModule,
    // MediumWidgetModule,
    PortfolioRoutingModule
  ]
})
export class PortfolioModule { }
