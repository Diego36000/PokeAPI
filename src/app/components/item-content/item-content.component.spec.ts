import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemContentComponent } from './item-content.component';

describe('ItemContentComponent', () => {
  let component: ItemContentComponent;
  let fixture: ComponentFixture<ItemContentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ItemContentComponent]
    });
    fixture = TestBed.createComponent(ItemContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
