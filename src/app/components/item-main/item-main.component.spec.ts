import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemMainComponent } from './item-main.component';

describe('ItemMainComponent', () => {
  let component: ItemMainComponent;
  let fixture: ComponentFixture<ItemMainComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ItemMainComponent]
    });
    fixture = TestBed.createComponent(ItemMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
