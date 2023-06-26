import { Component, OnInit } from '@angular/core';
import { CryptoPricesComponent } from './crypto-prices/crypto-prices.component';
import { CoinOfTheDayComponent } from './coin-of-the-day/coin-of-the-day.component';

@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.css'],
    standalone: true,
    imports: [CoinOfTheDayComponent, CryptoPricesComponent]
})
export class DashboardComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
