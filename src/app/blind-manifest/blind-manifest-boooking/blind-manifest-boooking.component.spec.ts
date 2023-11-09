import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlindManifestBoookingComponent } from './blind-manifest-boooking.component';

describe('BlindManifestBoookingComponent', () => {
  let component: BlindManifestBoookingComponent;
  let fixture: ComponentFixture<BlindManifestBoookingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BlindManifestBoookingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BlindManifestBoookingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
