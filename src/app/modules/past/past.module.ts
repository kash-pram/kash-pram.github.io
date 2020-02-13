import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// import { SharedModule } from '../shared/shared.module';
import { PastRoutingModule } from './past-routing.module';
// import { MediumWidgetModule } from 'ngx-medium-widget';

import { PastComponent } from './past.component';


@NgModule({
  declarations: [ PastComponent ],
  imports: [
    CommonModule,
    // SharedModule,
    // MediumWidgetModule,
    PastRoutingModule
  ]
})
export class PastModule { }
