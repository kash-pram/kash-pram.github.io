import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material';
import { timer } from 'rxjs';

@Component({
  selector: 'app-resume-snackbar',
  templateUrl: './resume-snackbar.component.html',
  // styleUrls: ['./resume-snackbar.component.scss']
})
export class ResumeSnackbarComponent {
  subActiveTimer;
  timerCount = 6;

  constructor ( public snackBar: MatSnackBar ) {
    const source = timer(0, 1000);
    this.subActiveTimer = source.subscribe(() => {
      this.timerCount--;
      if (this.timerCount === 0) {
        this.subActiveTimer.unsubscribe();
      } // IF
    });
  } // CONSTR

  closeMessage () {
    this.subActiveTimer.unsubscribe();
    this.snackBar.dismiss();
  } // FN

} // EXPORT
