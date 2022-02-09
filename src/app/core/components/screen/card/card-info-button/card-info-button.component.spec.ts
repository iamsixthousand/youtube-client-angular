import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardInfoButtonComponent } from './card-info-button.component';

describe('CardInfoButtonComponent', () => {
  let component: CardInfoButtonComponent;
  let fixture: ComponentFixture<CardInfoButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CardInfoButtonComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardInfoButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
