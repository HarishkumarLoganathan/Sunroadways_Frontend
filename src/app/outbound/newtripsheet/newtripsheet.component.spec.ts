import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewtripsheetComponent } from './newtripsheet.component';

describe('NewtripsheetComponent', () => {
  let component: NewtripsheetComponent;
  let fixture: ComponentFixture<NewtripsheetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewtripsheetComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewtripsheetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
