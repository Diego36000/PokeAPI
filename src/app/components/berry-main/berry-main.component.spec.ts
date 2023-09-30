import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BerryMainComponent } from './berry-main.component';

describe('BerryMainComponent', () => {
  let component: BerryMainComponent;
  let fixture: ComponentFixture<BerryMainComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BerryMainComponent]
    });
    fixture = TestBed.createComponent(BerryMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
