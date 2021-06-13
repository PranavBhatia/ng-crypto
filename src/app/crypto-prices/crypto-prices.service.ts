import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CryptoPricesService {
  private _marketData = [
    {
      s: 'BTC', //symbol
      n: 'Bitcoin', //name
      p: 35910.11041246, //Price
      mc: 672731677321, //Market Cap
      pc: 0.07, //Percent Change (24 Hours)
    },
    {
      s: 'ETH',
      n: 'Ethereum',
      p: 2359.4236961,
      mc: 274339125921,
      pc: -2.86,
    },
    {
      s: 'USDT',
      n: 'Tether',
      p: 1.00268549,
      mc: 62942280453,
      pc: -0.03,
    },
    {
      s: 'BNB',
      n: 'Binance Coin',
      p: 337.01354378,
      mc: 52079933661,
      pc: 2.99,
    },
    {
      s: 'ADA',
      n: 'Cardano',
      p: 1.42656887,
      mc: 45744914699,
      pc: -3.02,
    },
    {
      s: 'HEX',
      n: 'HEX',
      p: 0.07984436,
      mc: 45638436064,
      pc: -2.73,
    },
    {
      s: 'DOGE',
      n: 'Dogecoin',
      p: 0.31150107,
      mc: 40497601277,
      pc: -1.16,
    },
    {
      s: 'XRP',
      n: 'XRP',
      p: 0.83302661,
      mc: 38477144630,
      pc: -0.52,
    },
    {
      s: 'USDC',
      n: 'USD Coin',
      p: 1.00147047,
      mc: 23626226709,
      pc: -0.03,
    },
    {
      s: 'DOT',
      n: 'Polkadot',
      p: 20.31933677,
      mc: 20351668284,
      pc: -2.99,
    },
  ];

  get marketData() {
    return this._marketData;
  }

  set marketData(marketData) {
    this._marketData = marketData;
  }

  constructor() {}
}
