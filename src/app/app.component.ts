import { Component } from '@angular/core';
// import {MatSnackBar} from '@angular/material/snack-bar';

// import { Component, Input, HostBinding } from '@angular/core';
// import {FormControl} from '@angular/forms';
// import { Title } from '@angular/platform-browser';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';
import { Title } from '@angular/platform-browser';
// import { LoaderEmitterService } from './_services/loader-emitter.service';
// import { APP_CONSTANTS } from './_constants/app-constants';
// import { AlertService } from './_services/alert.service';

// import { ResumeSnackbarComponent } from './components/resume-snackbar/resume-snackbar.component';
import { filter, map } from 'rxjs/operators';

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
  // styleUrls: [ './app.component.scss' ]
})
export class AppComponent  {
showSpinner = false;

minHeight = window.innerHeight;
// @HostListener('window:resize', ['$event'])
// onResize(event) {
//   this.minHeight = window.innerHeight - 250;
// }

constructor ( 
  // public _gtagService: GtagService,
  // public _alertService: AlertService,
  // private _snackBar: MatSnackBar,
  // public _loaderEmitter: LoaderEmitterService,
  public router: Router,
  public activatedRoute: ActivatedRoute,
  private titleService: Title
  ) {
// Create an Observable that will publish a value on an interval
// const secondsCounter = interval(1000);
// // Subscribe to begin publishing values
// secondsCounter.subscribe(n =>
//   this._alertService.info('Click here to view / download Resume')
  
//   );
//   // this._alertService.info('Click here to view / download Resume')

    // DO NOT DELETE
    // setTimeout(function() {    
    //   this._snackBar.openFromComponent(ResumeSnackbarComponent, {
    //     duration: 9000,
    //     // panelClass: 'min-width-400px'
    //     // verticalPosition: 'top',
    //     // horizontalPosition: 'right'
    //   });
    // }.bind(this), 5000);
    // DO NOT DELETE

    // DO NOT DELETE
    // this._loaderEmitter.changeEmitted$.subscribe(text => {
    //   if ( text === APP_CONSTANTS.SHOW_LOADING ) {
    //     this.showSpinner = true;
    //   } else {
    //     this.showSpinner = false;
    //   }
    // });
    // DO NOT DELETE

    const appTitle = this.titleService.getTitle();

    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd),
      map(() => {
        let child = this.activatedRoute.firstChild;
        console.log(child);
        
        while (child.firstChild) {
          child = child.firstChild;
        }
        if (child.snapshot.data['title']) {
          return child.snapshot.data['title'];
        }
        return appTitle;
      })
    ).subscribe((ttl: string) => {
      this.titleService.setTitle(ttl + ' | PPM - Frontend Developer');
    });

    this.router.events.subscribe(event => {
      if ( event instanceof NavigationEnd ) {
        // gtag('config', 'UA-156515857-5', {'page_path': event.urlAfterRedirects});
        gtag('config', 'UA-156515857-5', {'page_path': event.url});
      }
    });

  } // CONSTRUCTOR
  
  onActivate(event) {
    let scrollToTop = window.setInterval(() => {
      let pos = window.pageYOffset;
      if (pos > 0) {
          window.scrollTo(0, pos - 20); // how far to scroll on each step
      } else {
          window.clearInterval(scrollToTop);
      }
    }, 16);
  } // FN

} // EXPORTS
