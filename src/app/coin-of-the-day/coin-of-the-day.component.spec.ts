import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoinOfTheDayComponent } from './coin-of-the-day.component';

describe('CoinOfTheDayComponent', () => {
  let component: CoinOfTheDayComponent;
  let fixture: ComponentFixture<CoinOfTheDayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CoinOfTheDayComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CoinOfTheDayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
