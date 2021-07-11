import { Component, OnInit } from '@angular/core';
import { MarketData } from 'src/app/shared/market-data.model';
import { CryptoPricesService } from './crypto-prices.service';

@Component({
  selector: 'app-crypto-prices',
  templateUrl: './crypto-prices.component.html',
  styleUrls: ['./crypto-prices.component.css'],
})
export class CryptoPricesComponent implements OnInit {
  marketData: MarketData[] = [];

  constructor(private cryptoPricesService: CryptoPricesService) {}

  ngOnInit(): void {
    this.marketData = this.cryptoPricesService.marketData;

    if (!this.marketData?.length) {
      this.cryptoPricesService.fetchMarketData().subscribe(() => {
        this.marketData = this.cryptoPricesService.marketData;
      });
    }
  }
}
