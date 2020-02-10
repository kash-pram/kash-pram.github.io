import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SkillsetComponent } from './skillset.component';
import { APP_CONSTANTS } from 'src/app/_constants/app-constants';

const routes: Routes = [
  { path: '', component: SkillsetComponent, data: { title: 'Skillset' } },
  { path: '**', pathMatch: 'full', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SkillsetRoutingModule { }
