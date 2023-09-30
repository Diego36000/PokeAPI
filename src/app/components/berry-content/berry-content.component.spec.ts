import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BerryContentComponent } from './berry-content.component';

describe('BerryContentComponent', () => {
  let component: BerryContentComponent;
  let fixture: ComponentFixture<BerryContentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BerryContentComponent]
    });
    fixture = TestBed.createComponent(BerryContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
