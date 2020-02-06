import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SkillsetComponent } from './skillset.component';
import { SkillsetRoutingModule } from './skillset-routing.module';

@NgModule({
  declarations: [SkillsetComponent],
  imports: [
    CommonModule,
    SkillsetRoutingModule
  ]
})
export class SkillsetModule { }
