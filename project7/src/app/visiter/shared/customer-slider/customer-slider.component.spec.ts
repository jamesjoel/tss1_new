import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerSliderComponent } from './customer-slider.component';

describe('CustomerSliderComponent', () => {
  let component: CustomerSliderComponent;
  let fixture: ComponentFixture<CustomerSliderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomerSliderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerSliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
