import { Component, OnInit } from '@angular/core';
import { CryptoPricesService } from './crypto-prices.service';

@Component({
  selector: 'app-crypto-prices',
  templateUrl: './crypto-prices.component.html',
  styleUrls: ['./crypto-prices.component.css'],
})
export class CryptoPricesComponent implements OnInit {
  marketData: {
    s: string;
    n: string;
    p: number;
    mc: number;
    pc: number;
  }[] = [];

  constructor(private cryptoPricesService: CryptoPricesService) {}

  ngOnInit(): void {
    this.marketData = this.cryptoPricesService.marketData;
  }
}
