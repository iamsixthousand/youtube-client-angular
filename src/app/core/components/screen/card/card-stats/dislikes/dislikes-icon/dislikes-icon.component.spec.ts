import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DislikesIconComponent } from './dislikes-icon.component';

describe('DislikesIconComponent', () => {
  let component: DislikesIconComponent;
  let fixture: ComponentFixture<DislikesIconComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DislikesIconComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DislikesIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
