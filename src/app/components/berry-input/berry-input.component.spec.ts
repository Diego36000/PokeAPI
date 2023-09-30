import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BerryInputComponent } from './berry-input.component';

describe('BerryInputComponent', () => {
  let component: BerryInputComponent;
  let fixture: ComponentFixture<BerryInputComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BerryInputComponent]
    });
    fixture = TestBed.createComponent(BerryInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
