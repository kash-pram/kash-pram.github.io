import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  // MatButtonModule,
  // MatCheckboxModule,
  // MatInputModule,
  // MatSelectModule,
  // MatSidenavModule,
  // MatDialogModule,
  // MatExpansionModule,
  // MatMenuModule,
  // MatSlideToggleModule,
  // MatDatepickerModule,
  // MatNativeDateModule,
  // MatTableModule,
  // MatSortModule,
  // MatPaginatorModule,
  // MatProgressBarModule,
  // MatChipsModule,
  // MatIconModule,
  // MatCardModule,
  // MatTabsModule,
  // MatStepperModule,
  MatSnackBarModule,
  // MatDividerModule,
  // MatListModule,
  // MatToolbarModule,
  // MatGridListModule,
  // MatButtonToggleModule,
  // MatRadioModule,
  // MatBadgeModule,
  // MatProgressSpinnerModule,
  // MatTooltipModule
} from '@angular/material';

import { CdkTableModule } from '@angular/cdk/table';
import { CardsListComponent } from './cards-list/cards-list.component';

@NgModule({
  // declarations: [ ],
  imports: [
    CommonModule
  ],
  exports: [
    // MatButtonModule,
    // MatCheckboxModule,
    // MatInputModule,
    // MatSelectModule,
    // MatSidenavModule,
    // MatDialogModule,
    // MatExpansionModule,
    // MatMenuModule,
    // MatSlideToggleModule,
    // MatTableModule,
    // MatDatepickerModule,
    // MatNativeDateModule,
    // MatSortModule,
    // MatPaginatorModule,
    // MatProgressBarModule,
    // MatIconModule,
    // MatChipsModule,
    // MatCardModule,
    // MatTabsModule,
    // MatStepperModule,
    CdkTableModule,
    MatSnackBarModule,
    CardsListComponent,
    // MatDividerModule,
    // MatListModule,
    // MatToolbarModule,
    // MatGridListModule,
    // MatButtonToggleModule,
    // MatRadioModule,
    // MatBadgeModule,
    // MatProgressSpinnerModule,
    // MatTooltipModule
  ],
  declarations: [ CardsListComponent ]
})
export class SharedModule { }
