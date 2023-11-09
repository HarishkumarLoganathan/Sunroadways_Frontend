import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InboundlistComponent } from './inboundlist.component';

describe('InboundlistComponent', () => {
  let component: InboundlistComponent;
  let fixture: ComponentFixture<InboundlistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InboundlistComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InboundlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
