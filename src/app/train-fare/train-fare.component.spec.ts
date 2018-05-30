import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrainFareComponent } from './train-fare.component';

describe('TrainFareComponent', () => {
  let component: TrainFareComponent;
  let fixture: ComponentFixture<TrainFareComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrainFareComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrainFareComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
