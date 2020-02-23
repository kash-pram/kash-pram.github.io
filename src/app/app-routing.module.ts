import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  // { path: "", component: AppComponent, pathMatch: 'full' },
  { path: "past", 
    loadChildren: () => import('./modules/past/past.module').then(m => m.PastModule)
  },
  { path: "skill-set",
    loadChildren: () => import('./modules/skillset/skillset.module').then(m => m.SkillsetModule)
  },
  // { path: "about",
  //   loadChildren: () => import('./modules/about/about.module').then(m => m.AboutModule)
  // },
  { path: "about",
    loadChildren: () => import('./modules/about/about.module').then(m => m.AboutModule)
  },
  // {
  //   path: '',
  //   redirectTo: 'skillset',
  //   pathMatch: 'full'
  // },
  { path: "**", pathMatch: 'prefix', redirectTo: 'skill-set' }
  //   loadChildren: () => import('./modules/skillset/skillset.module').then(m => m.SkillsetModule)
  // }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  // imports: [RouterModule.forRoot(routes, { enableTracing: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
