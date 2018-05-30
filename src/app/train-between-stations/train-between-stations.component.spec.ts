import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrainBetweenStationsComponent } from './train-between-stations.component';

describe('TrainBetweenStationsComponent', () => {
  let component: TrainBetweenStationsComponent;
  let fixture: ComponentFixture<TrainBetweenStationsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrainBetweenStationsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrainBetweenStationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
