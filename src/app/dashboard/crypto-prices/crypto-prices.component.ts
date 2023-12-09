import { Component, OnInit } from '@angular/core';
import { MarketData } from 'src/app/shared/market-data.model';
import { CryptoPricesService } from './crypto-prices.service';
import { MatDividerModule } from '@angular/material/divider';
import { RouterLink } from '@angular/router';
import { NgFor, CurrencyPipe } from '@angular/common';
import { MatListModule } from '@angular/material/list';
import { MatCardModule } from '@angular/material/card';

@Component({
    selector: 'app-crypto-prices',
    templateUrl: './crypto-prices.component.html',
    styleUrls: ['./crypto-prices.component.css'],
    standalone: true,
    imports: [MatCardModule, MatListModule, NgFor, RouterLink, MatDividerModule, CurrencyPipe]
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
