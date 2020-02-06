import { NgModule } from '@angular/core';
import { BrowserModule, Title } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { SharedModule } from'./modules/shared/shared.module';

import { AppComponent } from './app.component';
import { TopNavComponent } from './components/top-nav/top-nav.component';
import { AppRoutingModule } from './app-routing.module';
// import { SpinnerComponent } from './components/spinner/spinner.component';
// import { SpinnerOverlayComponent } from './components/spinner-overlay/spinner-overlay.component';

@NgModule({
  imports: [ BrowserModule, 
    FormsModule, ReactiveFormsModule,
    HttpClientModule,
    SharedModule,
    AppRoutingModule
  ],
  // declarations: [ AppComponent, SpinnerComponent, SpinnerOverlayComponent ],
  declarations: [ AppComponent, TopNavComponent ],
  // entryComponents: [ SpinnerOverlayComponent ],
  // providers: [ Title, {
  //   provide: HTTP_INTERCEPTORS,
  //   useClass: HTTPInterceptorService,
  //   multi: true
  // } ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
