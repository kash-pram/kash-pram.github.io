import { NgModule } from '@angular/core';
import { BrowserModule, Title } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { SharedModule } from'./modules/shared/shared.module';

import { AppComponent } from './app.component';


@NgModule({
  imports:      [ BrowserModule, 
  FormsModule, ReactiveFormsModule,
  HttpClientModule,
  SharedModule,
  RouterModule.forRoot(
    [
      { path: "", component: AppComponent}
    ]
  )],
  declarations: [ AppComponent ],
  // providers: [ Title, {
  //   provide: HTTP_INTERCEPTORS,
  //   useClass: HTTPInterceptorService,
  //   multi: true
  // } ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
