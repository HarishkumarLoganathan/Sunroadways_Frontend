import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookingComponentBBComponent } from './booking-component-bb.component';

describe('BookingComponentBBComponent', () => {
  let component: BookingComponentBBComponent;
  let fixture: ComponentFixture<BookingComponentBBComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BookingComponentBBComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BookingComponentBBComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
