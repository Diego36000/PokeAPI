import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RouteErrorComponent } from './route-error.component';

describe('RouteErrorComponent', () => {
  let component: RouteErrorComponent;
  let fixture: ComponentFixture<RouteErrorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RouteErrorComponent]
    });
    fixture = TestBed.createComponent(RouteErrorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
