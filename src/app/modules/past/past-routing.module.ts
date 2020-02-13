import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PastComponent } from './past.component';

const routes: Routes = [{ path: '', component: PastComponent, data: { title: 'past' }  }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PastRoutingModule { }
