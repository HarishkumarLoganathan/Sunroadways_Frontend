import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PartialManifestBookingComponent } from './partial-manifest-booking.component';

describe('PartialManifestBookingComponent', () => {
  let component: PartialManifestBookingComponent;
  let fixture: ComponentFixture<PartialManifestBookingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PartialManifestBookingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PartialManifestBookingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
