import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  // { path: "", component: AppComponent, pathMatch: 'full' },
  { path: "skillset",
    loadChildren: () => import('./modules/skillset/skillset.module').then(m => m.SkillsetModule)
  },
  { path: "projects", 
    loadChildren: () => import('./modules/projects/projects.module').then(m => m.ProjectsModule)
  },
  // { path: "about",
  //   loadChildren: () => import('./modules/about/about.module').then(m => m.AboutModule)
  // },
  { path: "contact",
    loadChildren: () => import('./modules/contact/contact.module').then(m => m.ContactModule)
  },
  // {
  //   path: '',
  //   redirectTo: 'skillset',
  //   pathMatch: 'full'
  // },
  { path: "**", pathMatch: 'prefix', redirectTo: 'skillset' }
  //   loadChildren: () => import('./modules/skillset/skillset.module').then(m => m.SkillsetModule)
  // }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  // imports: [RouterModule.forRoot(routes, { enableTracing: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
