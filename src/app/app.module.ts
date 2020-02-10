import { NgModule } from '@angular/core';
import { BrowserModule, Title } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { InlineSVGModule } from 'ng-inline-svg';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { SharedModule } from'./modules/shared/shared.module';
import { AppRoutingModule } from './app-routing.module';
// import { AboutModule } from './modules/about/about.module';
import { SkillsetModule } from './modules/skillset/skillset.module';
import { ProjectsModule } from './modules/projects/projects.module';
import { ProfilesModule } from './modules/profiles/profiles.module';

import { AppComponent } from './app.component';
import { TopNavComponent } from './components/top-nav/top-nav.component';
import { ResumeSnackbarComponent } from './components/resume-snackbar/resume-snackbar.component';
// import { AlertComponent } from './components/alert/alert.component';

// import { SpinnerComponent } from './components/spinner/spinner.component';
// import { SpinnerOverlayComponent } from './components/spinner-overlay/spinner-overlay.component';

@NgModule({
  imports: [ BrowserModule, 
    FormsModule, ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    SharedModule,
    AppRoutingModule,
    ProjectsModule,
    ProfilesModule,
    // AboutModule,
    SkillsetModule,
    InlineSVGModule.forRoot()
  ],
  // declarations: [ AppComponent, SpinnerComponent, SpinnerOverlayComponent ],
  declarations: [ AppComponent, TopNavComponent, ResumeSnackbarComponent, 
    // AlertComponent
   ],
  entryComponents: [ 
    // SpinnerOverlayComponent,
    ResumeSnackbarComponent
  ],
  // providers: [ Title, {
  //   provide: HTTP_INTERCEPTORS,
  //   useClass: HTTPInterceptorService,
  //   multi: true
  // } ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
