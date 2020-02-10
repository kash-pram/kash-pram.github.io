import { Component } from '@angular/core';
// import {MatSnackBar} from '@angular/material/snack-bar';

// import { Component, Input, HostBinding } from '@angular/core';
// import {FormControl} from '@angular/forms';
// import { Title } from '@angular/platform-browser';
import { Router, NavigationEnd, ActivatedRoute, NavigationStart } from '@angular/router';
import { Title } from '@angular/platform-browser';
// import { LoaderEmitterService } from './_services/loader-emitter.service';
// import { APP_CONSTANTS } from './_constants/app-constants';
// import { AlertService } from './_services/alert.service';

// import { ResumeSnackbarComponent } from './components/resume-snackbar/resume-snackbar.component';
import { filter, map } from 'rxjs/operators';
import { trigger, state, style, transition, animate } from '@angular/animations';

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
  styleUrls: [ './app.component.scss' ],
  animations: [
    // the fade-in/fade-out animation.
    trigger('simpleFadeAnimation', [

      // the "in" style determines the "resting" state of the element when it is visible.
      state('in', style({opacity: 1})),

      // fade in when created. this could also be written as transition('void => *')
      transition(':enter', [
        style({opacity: 0}),
        animate(200 )
      ]),

      // fade out when destroyed. this could also be written as transition('void => *')
      transition(':leave',
        animate(300, style({opacity: 0})))
    ])
  ]
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

        while (child.firstChild) {
          child = child.firstChild;
        }
        if (child.snapshot.data['title']) {
          return child.snapshot.data['title'];
        }
        return appTitle;
      })
    ).subscribe((ttl: string) => {
      this.titleService.setTitle('PPM - ' + ttl + ' | Frontend Developer');
    });

    this.router.events.subscribe(event => {

      if ( event instanceof NavigationStart ) {
        this.showSpinner = true;
      } else if ( event instanceof NavigationEnd ) {
        // gtag('config', 'UA-156515857-5', {'page_path': event.urlAfterRedirects});
        gtag('config', 'UA-156515857-5', {'page_path': event.url});
        setTimeout(() => {
          this.showSpinner = false;
        }, 500);
      } // IF-ELSE
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
