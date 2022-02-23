import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LikesIconComponent } from './likes-icon.component';

describe('LikesIconComponent', () => {
  let component: LikesIconComponent;
  let fixture: ComponentFixture<LikesIconComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LikesIconComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LikesIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
