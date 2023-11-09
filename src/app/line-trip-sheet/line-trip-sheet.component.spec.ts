import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LineTripSheetComponent } from './line-trip-sheet.component';

describe('LineTripSheetComponent', () => {
  let component: LineTripSheetComponent;
  let fixture: ComponentFixture<LineTripSheetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LineTripSheetComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LineTripSheetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
