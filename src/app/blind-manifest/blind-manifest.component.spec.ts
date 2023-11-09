import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlindManifestComponent } from './blind-manifest.component';

describe('BlindManifestComponent', () => {
  let component: BlindManifestComponent;
  let fixture: ComponentFixture<BlindManifestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BlindManifestComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BlindManifestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
