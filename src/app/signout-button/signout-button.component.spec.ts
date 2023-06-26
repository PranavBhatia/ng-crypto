import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignoutButtonComponent } from './signout-button.component';

describe('SignoutButtonComponent', () => {
  let component: SignoutButtonComponent;
  let fixture: ComponentFixture<SignoutButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ SignoutButtonComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SignoutButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
