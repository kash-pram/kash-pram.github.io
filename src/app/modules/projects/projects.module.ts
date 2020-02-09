import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// import { SharedModule } from '../shared/shared.module';
import { ProjectsRoutingModule } from './projects-routing.module';
// import { MediumWidgetModule } from 'ngx-medium-widget';

import { ProjectsComponent } from './projects.component';


@NgModule({
  declarations: [ProjectsComponent],
  imports: [
    CommonModule,
    // SharedModule,
    // MediumWidgetModule,
    ProjectsRoutingModule
  ]
})
export class ProjectsModule { }
