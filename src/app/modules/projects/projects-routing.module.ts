import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProjectsComponent } from './projects.component';
import { APP_CONSTANTS } from 'src/app/_constants/app-constants';

const routes: Routes = [{ path: '', component: ProjectsComponent, data: { title: 'projects' }  }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProjectsRoutingModule { }
