import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LiveStationComponent } from './live-station.component';

describe('LiveStationComponent', () => {
  let component: LiveStationComponent;
  let fixture: ComponentFixture<LiveStationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LiveStationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LiveStationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
