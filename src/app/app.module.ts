import { NgModule } from '@angular/core';
import { BrowserModule, Title } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { InlineSVGModule } from 'ng-inline-svg';

import { SharedModule } from'./modules/shared/shared.module';
import { AppRoutingModule } from './app-routing.module';
// import { AboutModule } from './modules/about/about.module';
import { SkillsetModule } from './modules/skillset/skillset.module';
import { PortfolioModule } from './modules/portfolio/portfolio.module';
import { ProfilesModule } from './modules/profiles/profiles.module';

import { AppComponent } from './app.component';
import { TopNavComponent } from './components/top-nav/top-nav.component';
// import { AlertComponent } from './components/alert/alert.component';

// import { SpinnerComponent } from './components/spinner/spinner.component';
// import { SpinnerOverlayComponent } from './components/spinner-overlay/spinner-overlay.component';

@NgModule({
  imports: [ BrowserModule, 
    FormsModule, ReactiveFormsModule,
    HttpClientModule,
    SharedModule,
    AppRoutingModule,
    PortfolioModule,
    ProfilesModule,
    // AboutModule,
    SkillsetModule,
    InlineSVGModule.forRoot()
  ],
  // declarations: [ AppComponent, SpinnerComponent, SpinnerOverlayComponent ],
  declarations: [ AppComponent, TopNavComponent, 
    // AlertComponent
   ],
  // entryComponents: [ SpinnerOverlayComponent ],
  // providers: [ Title, {
  //   provide: HTTP_INTERCEPTORS,
  //   useClass: HTTPInterceptorService,
  //   multi: true
  // } ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
