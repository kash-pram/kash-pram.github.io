import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { KeywordsComponent } from './keywords.component';

const routes: Routes = [{ path: '', component: KeywordsComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class KeywordsRoutingModule { }
