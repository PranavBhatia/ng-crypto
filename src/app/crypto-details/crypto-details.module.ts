import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CryptoDetailsRoutingModule } from './crypto-details-routing.module';
import { CryptoDetailsComponent } from './crypto-details.component';


@NgModule({
  declarations: [
    CryptoDetailsComponent
  ],
  imports: [
    CommonModule,
    CryptoDetailsRoutingModule
  ]
})
export class CryptoDetailsModule { }
