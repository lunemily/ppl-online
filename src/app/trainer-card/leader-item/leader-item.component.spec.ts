import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LeaderItemComponent } from './leader-item.component';

describe('LeaderItemComponent', () => {
  let component: LeaderItemComponent;
  let fixture: ComponentFixture<LeaderItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [LeaderItemComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LeaderItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
