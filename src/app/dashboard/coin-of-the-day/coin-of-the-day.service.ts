import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { tap } from 'rxjs/operators';
import { MarketData } from 'src/app/shared/market-data.model';

@Injectable({
  providedIn: 'root',
})
export class CoinOfTheDayService {
  private _coin?: { name: string; symbol: string } = undefined;

  get coin() {
    return this._coin;
  }

  set coin(coin) {
    this._coin = coin;
  }

  constructor(private httpClient: HttpClient) {}

  fetchCoinOfTheDay() {
    const key = 'uyxdwe6j5311uak0b29e5c';
    return this.httpClient
      .get<{ config: any; data: { name: string; symbol: string }; usage: any }>(
        `https://api.lunarcrush.com/v2?data=coinoftheday&key=${key}`
      )
      .pipe(
        tap((response) => {
          this.coin = response.data;
        })
      );
  }
}
