import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProfilesComponent } from './profiles.component';

const routes: Routes = [{ path: '', component: ProfilesComponent, data: { title: 'Profiles'}  }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProfilesRoutingModule { }
