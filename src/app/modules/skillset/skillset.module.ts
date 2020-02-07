import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SkillsetComponent } from './skillset.component';
import { SkillsetRoutingModule } from './skillset-routing.module';
// import { TagCloudModule } from 'angular-tag-cloud-module';

@NgModule({
  declarations: [SkillsetComponent],
  imports: [
    CommonModule,
    // TagCloudModule,
    SkillsetRoutingModule
  ]
})
export class SkillsetModule { }
