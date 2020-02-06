import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';

const routes: Routes = [
  // { path: "", component: AppComponent, pathMatch: 'full' },
  { path: "keywords", 
    loadChildren: () => import('./modules/keywords/keywords.module').then(m => m.KeywordsModule)
  },
  { path: "portfolio", 
    loadChildren: () => import('./modules/portfolio/portfolio.module').then(m => m.PortfolioModule)
  },
  { path: "about",
    loadChildren: () => import('./modules/about/about.module').then(m => m.AboutModule)
  },
  { path: "profiles",
    loadChildren: () => import('./modules/profiles/profiles.module').then(m => m.ProfilesModule)
  },
  // {
  //   path: '',
  //   redirectTo: '',
  //   pathMatch: 'full'
  // },
  
  // { path: "**", component: AppComponent }
  //   loadChildren: () => import('./modules/keywords/keywords.module').then(m => m.KeywordsModule)
  // }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
