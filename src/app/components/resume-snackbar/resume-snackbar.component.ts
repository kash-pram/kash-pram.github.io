import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-resume-snackbar',
  templateUrl: './resume-snackbar.component.html',
  // styleUrls: ['./resume-snackbar.component.scss']
})
export class ResumeSnackbarComponent {
  open: boolean = false;
  
  constructor ( public snackBar: MatSnackBar ) {
  }

  closeMessage () {
    this.snackBar.dismiss();
  } // FN

} // EXPORT
