import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PartialManifestRequestComponent } from './partial-manifest-request.component';

describe('PartialManifestRequestComponent', () => {
  let component: PartialManifestRequestComponent;
  let fixture: ComponentFixture<PartialManifestRequestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PartialManifestRequestComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PartialManifestRequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
