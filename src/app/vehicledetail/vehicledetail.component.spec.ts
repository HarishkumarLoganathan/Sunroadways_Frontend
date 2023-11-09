import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VehicledetailComponent } from './vehicledetail.component';

describe('VehicledetailComponent', () => {
  let component: VehicledetailComponent;
  let fixture: ComponentFixture<VehicledetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VehicledetailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VehicledetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
