import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SeatAvalibilityComponent } from './seat-avalibility.component';

describe('SeatAvalibilityComponent', () => {
  let component: SeatAvalibilityComponent;
  let fixture: ComponentFixture<SeatAvalibilityComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SeatAvalibilityComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SeatAvalibilityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
