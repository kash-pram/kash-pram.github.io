import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// import { SharedModule } from '../shared/shared.module';
import { SkillsetRoutingModule } from './skillset-routing.module';
// import { TagCloudModule } from 'angular-tag-cloud-module';

import { SkillsetComponent } from './skillset.component';
import { CloudyModule } from 'cloudee';

@NgModule({
  declarations: [SkillsetComponent],
  imports: [
    CommonModule,
    CloudyModule,
    // SharedModule,
    // TagCloudModule,
    SkillsetRoutingModule
  ]
})
export class SkillsetModule { }