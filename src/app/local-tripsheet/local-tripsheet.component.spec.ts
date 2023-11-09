import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LocalTripsheetComponent } from './local-tripsheet.component';

describe('LocalTripsheetComponent', () => {
  let component: LocalTripsheetComponent;
  let fixture: ComponentFixture<LocalTripsheetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LocalTripsheetComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LocalTripsheetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
