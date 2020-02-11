import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SkillsetComponent } from './skillset.component';

const routes: Routes = [
  { path: '', component: SkillsetComponent, data: { title: 'skills' } },
  { path: '**', pathMatch: 'full', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SkillsetRoutingModule { }
