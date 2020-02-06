import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { KeywordsComponent } from './keywords.component';
import { KeywordsRoutingModule } from './keywords-routing.module';

@NgModule({
  declarations: [KeywordsComponent],
  imports: [
    CommonModule,
    KeywordsRoutingModule
  ]
})
export class KeywordsModule { }
