import { Component, OnInit } from '@angular/core';
import { CoinOfTheDayService } from './coin-of-the-day.service';

@Component({
  selector: 'app-coin-of-the-day',
  templateUrl: './coin-of-the-day.component.html',
  styleUrls: ['./coin-of-the-day.component.css'],
})
export class CoinOfTheDayComponent implements OnInit {
  coinOfTheDay?: { name: string; symbol: string } = undefined;

  constructor(private coinOfTheDayService: CoinOfTheDayService) {}

  ngOnInit(): void {
    this.coinOfTheDay = this.coinOfTheDayService.coin;

    if (!this.coinOfTheDay) {
      this.coinOfTheDayService.fetchCoinOfTheDay().subscribe(() => {
        this.coinOfTheDay = this.coinOfTheDayService.coin;
      });
    }
  }
}
