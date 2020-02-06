import { Component } from '@angular/core';
// import { Component, Input, HostBinding } from '@angular/core';
// import {FormControl} from '@angular/forms';
// import { Title } from '@angular/platform-browser';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';
import { LoaderEmitterService } from './_services/loader-emitter.service';
import { APP_CONSTANTS } from './_constants/app-constants';
// import { filter, map } from 'rxjs/operators';

// import moment from 'moment';
// import {
//   trigger,
//   state,
//   style,
//   animate,
//   transition,
//   // ...
// } from '@angular/animations';
// import * as _ from 'lodash';

// import { GtagService } from './_services/gtag.service';

declare let gtag:Function;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.scss' ]
})
export class AppComponent  {
showSpinner = false;

constructor ( 
  // public _gtagService: GtagService,
  public _loaderEmitter: LoaderEmitterService,
  public router: Router,
  // public activatedRoute: ActivatedRoute,
  // private titleService: Title
  ) {

    this._loaderEmitter.changeEmitted$.subscribe(text => {
      if ( text === APP_CONSTANTS.SHOW_LOADING ) {
        this.showSpinner = true;
      } else {
        this.showSpinner = false;
      }
    })
    // const appTitle = this.titleService.getTitle();

    // this.router.events.pipe(
    //   filter(event => event instanceof NavigationEnd),
    //   map(() => {
    //     let child = this.activatedRoute.firstChild;
    //     while (child.firstChild) {
    //       child = child.firstChild;
    //     }
    //     if (child.snapshot.data['title']) {
    //       return child.snapshot.data['title'];
    //     }
    //     return appTitle;
    //   })
    // ).subscribe((ttl: string) => {
    //   this.titleService.setTitle('My Title - ' + ttl);
    // });

    this.router.events.subscribe(event => {
      if(event instanceof NavigationEnd){
        // gtag('config', 'UA-156515857-3', {'page_path': event.urlAfterRedirects});
        gtag('config', 'UA-156515857-3', {'page_path': event.url});
      }
    });
  } // CONSTRUCTOR

} // EXPORTS