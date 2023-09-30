import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PokemonContentComponent } from './pokemon-content.component';

describe('PokemonContentComponent', () => {
  let component: PokemonContentComponent;
  let fixture: ComponentFixture<PokemonContentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PokemonContentComponent]
    });
    fixture = TestBed.createComponent(PokemonContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
