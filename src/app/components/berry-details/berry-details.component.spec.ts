import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BerryDetailsComponent } from './berry-details.component';

describe('BerryDetailsComponent', () => {
  let component: BerryDetailsComponent;
  let fixture: ComponentFixture<BerryDetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BerryDetailsComponent]
    });
    fixture = TestBed.createComponent(BerryDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
