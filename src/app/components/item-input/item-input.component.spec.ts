import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemInputComponent } from './item-input.component';

describe('ItemInputComponent', () => {
  let component: ItemInputComponent;
  let fixture: ComponentFixture<ItemInputComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ItemInputComponent]
    });
    fixture = TestBed.createComponent(ItemInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
