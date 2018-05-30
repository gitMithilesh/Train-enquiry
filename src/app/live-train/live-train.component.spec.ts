import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LiveTrainComponent } from './live-train.component';

describe('LiveTrainComponent', () => {
  let component: LiveTrainComponent;
  let fixture: ComponentFixture<LiveTrainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LiveTrainComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LiveTrainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
