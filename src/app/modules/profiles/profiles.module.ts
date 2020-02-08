import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '../shared/shared.module';
import { ProfilesRoutingModule } from './profiles-routing.module';

import { ProfilesComponent } from './profiles.component';

@NgModule({
  declarations: [ProfilesComponent],
  imports: [
    CommonModule,
    SharedModule,
    ProfilesRoutingModule
  ]
})
export class ProfilesModule { }
