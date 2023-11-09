import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsignmentDetailsComponent } from './consignment-details.component';

describe('ConsignmentDetailsComponent', () => {
  let component: ConsignmentDetailsComponent;
  let fixture: ComponentFixture<ConsignmentDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConsignmentDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConsignmentDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
