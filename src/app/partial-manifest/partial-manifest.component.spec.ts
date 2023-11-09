import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PartialManifestComponent } from './partial-manifest.component';

describe('PartialManifestComponent', () => {
  let component: PartialManifestComponent;
  let fixture: ComponentFixture<PartialManifestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PartialManifestComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PartialManifestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
