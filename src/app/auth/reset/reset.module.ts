import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ResetRoutingModule } from './reset-routing.module';
import { ResetComponent } from './reset.component';


@NgModule({
  declarations: [
    ResetComponent
  ],
  imports: [
    CommonModule,
    ResetRoutingModule
  ]
})
export class ResetModule { }
