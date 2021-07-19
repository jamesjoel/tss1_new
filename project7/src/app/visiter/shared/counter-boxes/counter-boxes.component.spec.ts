import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CounterBoxesComponent } from './counter-boxes.component';

describe('CounterBoxesComponent', () => {
  let component: CounterBoxesComponent;
  let fixture: ComponentFixture<CounterBoxesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CounterBoxesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CounterBoxesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
