import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BranchsignupComponent } from './branchsignup.component';

describe('BranchsignupComponent', () => {
  let component: BranchsignupComponent;
  let fixture: ComponentFixture<BranchsignupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BranchsignupComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BranchsignupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
