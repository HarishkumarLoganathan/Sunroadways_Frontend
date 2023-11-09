import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IncomingvehicleComponent } from './incomingvehicle.component';

describe('IncomingvehicleComponent', () => {
  let component: IncomingvehicleComponent;
  let fixture: ComponentFixture<IncomingvehicleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IncomingvehicleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IncomingvehicleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
